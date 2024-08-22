declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    /**
     * Animation name for `sal.js`
     *
     * @see: https://github.com/mciastek/sal/tree/master?tab=readme-ov-file#animations
     */
    "data-sal"?:
      | "fade"
      | "slide-up"
      | "slide-down"
      | "slide-left"
      | "slide-right"
      | "zoom-in"
      | "zoom-out"
      | "flip-up"
      | "flip-down"
      | "flip-left"
      | "flip-right"
    /**
     * Animation delay for `sal.js`
     *
     * @see: https://github.com/mciastek/sal/tree/master?tab=readme-ov-file#animations
     */
    "data-sal-delay"?: string
    /**
     * Animation easing for `sal.js`
     *
     * @see: https://github.com/mciastek/sal/tree/master?tab=readme-ov-file#animations
     */
    "data-sal-easing"?: string
  }
}
