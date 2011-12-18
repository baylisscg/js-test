/**
 * Load reqired scripts that install themselves globally.
 */
$LAB
    .script("/js/modernizr.js")
    .script("/js/require.js")
    .script("/js/Three.js")
    .script("/js/dust-full-0.3.0.js").wait()
    .script("/js/cube.js");