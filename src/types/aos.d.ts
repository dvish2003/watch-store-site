declare module 'aos' {
  interface AOSStatic {
    init(options?: Record<string, unknown>): void
    refresh?(): void
  }

  const AOS: AOSStatic
  export default AOS
}
