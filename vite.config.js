import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const llmTarget = env.LLM_BASE_URL || env.VITE_LLM_BASE_URL || 'https://llm-api.arc.vt.edu'
  const llmApiKey = env.LLM_API_KEY || env.VITE_LLM_API_KEY
  const normalizedLlmTarget = llmTarget.replace(/\/$/, '')
  const chatCompletionsUrl = normalizedLlmTarget.endsWith('/chat/completions')
    ? new URL(normalizedLlmTarget)
    : new URL(
      normalizedLlmTarget.endsWith('/api/v1') || normalizedLlmTarget.endsWith('/openai')
        ? `${normalizedLlmTarget}/chat/completions`
        : `${normalizedLlmTarget}/api/v1/chat/completions`,
    )
  const proxyTarget = chatCompletionsUrl.origin

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/llm': {
          target: proxyTarget,
          changeOrigin: true,
          secure: true,
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              if (llmApiKey) {
                proxyReq.setHeader('Authorization', `Bearer ${llmApiKey}`)
              }
            })
          },
          rewrite: () => `${chatCompletionsUrl.pathname}${chatCompletionsUrl.search}`,
        },
      },
    },
  }
})
