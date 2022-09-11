function isWebComponentSvelte(code) {
    const svelteOptionsIdx = code.indexOf('<svelte:options ')
    if(svelteOptionsIdx < 0) {
      return false
    }
    const tagOptionIdx = code.indexOf('tag=', svelteOptionsIdx)
    const svelteOptionsEndIdx = code.indexOf('>',svelteOptionsIdx);
    return tagOptionIdx > svelteOptionsIdx && tagOptionIdx < svelteOptionsEndIdx
  }
  export default {
    vitePlugin:{
      experimental: {
        dynamicCompileOptions({code}) {
          if(isWebComponentSvelte(code)) {
            return {
              customElement: true
            }
          }
        }
      }
    }
  }