import glsl from 'vite-plugin-glsl'

const isCodeSandbox = !!process.env.SANDBOX_URL

export default {
    root: "src/",
    publicDir: "../static/",
    base: "./",
    server:
    {
        host: true,
        open: !isCodeSandbox, // Open if it's not a CodeSandbox
        port: 3000
    },
    build:
    {
        outDir: "../dist",
        emptyOutDir: true,
        sourcemap: true
    },
    plugins:
    [
        glsl()
    ]
}
