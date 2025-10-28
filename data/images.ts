// Placeholders
const placeholder400x500 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='100%25' height='100%25' fill='%23E5E7EB'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='30' fill='%239CA3AF' dominant-baseline='middle' text-anchor='middle'%3E400x500%3C/text%3E%3C/svg%3E";
const placeholder800x1000 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect width='100%25' height='100%25' fill='%23E5E7EB'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='50' fill='%239CA3AF' dominant-baseline='middle' text-anchor='middle'%3E800x1000%3C/text%3E%3C/svg%3E";
const placeholder1800x1000_1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1800' height='1000' viewBox='0 0 1800 1000'%3E%3Crect width='100%25' height='100%25' fill='%23D1D5DB'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='100' fill='%236B7280' dominant-baseline='middle' text-anchor='middle'%3ESlide 1%3C/text%3E%3C/svg%3E";
const placeholder1800x1000_2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1800' height='1000' viewBox='0 0 1800 1000'%3E%3Crect width='100%25' height='100%25' fill='%239CA3AF'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='100' fill='%23F3F4F6' dominant-baseline='middle' text-anchor='middle'%3ESlide 2%3C/text%3E%3C/svg%3E";
const placeholder1800x1000_3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1800' height='1000' viewBox='0 0 1800 1000'%3E%3Crect width='100%25' height='100%25' fill='%236B7280'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='100' fill='%23D1D5DB' dominant-baseline='middle' text-anchor='middle'%3ESlide 3%3C/text%3E%3C/svg%3E";

export const imageAssets = {
  logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACGCAMAAAC1sTzNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAllBMVEX///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMAAAA4TAmRAAAAMXRSTlMAAQIFCAoLDRIVGBscHiEkKSsyNzg8P0JFSEtOUVRXWFxeYGVrgoeOkZSanqKusLe/wMrS1t7v+vE/iAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfoBh8HNy8xQdD6AAAEFElEQVR42u3d61MTURgG8A8GBQdBERQRcaGAoCAoChZEKCAoKCi4oKigioKCguLe/8LchMlkMpkkl03y+/VpZ87cZJLJzPNp1hQAAAAAAAAAAAAAAAB+m4zG+0KkE15q5Sg8zL5nK5hS1p+L0aP5tLRACO1h3Q4r0R6lRj8a/1W1xY1IkbYrR2H2rJXTU2p692tq9QGkU2p62a+p1QeQTqnpZb+m1tY743p0s/W1tQ5c9yv8Qj0oU4/y8h/tQ5s/o2+vT9++r6vVXwD1oXyM/gC+r5l5/D+rF6vL/y7z6OsbEIT6UB4bEIR6UB4bEIT6UB4bEIT6UB4bEIT6UD7G//Xq4n9a5dFvb0AQ6kN5bEAQ6kN5bEAQ6kN5bEAQ6kN5bEAQ6kP5GP2b1h34/e3//92vWn1h9eP69OlX1RoQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQmpsQhPpQps31gR/L/w8V/Xg46w9XF3+r+gA/kL5nK5hW1i82f8Xj43kAAAAAAAAAAAAAAABA3foH4Wz05w2u/nUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDYtMjlUMDc6NTU6NDcrMDA6MDBcE487AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTA2LTI5VDA3OjU1OjQ3KzAwOjAw+qJpZwAAAABJRU5ErkJggg==",
  // Product Images
  product1: {
    main: placeholder400x500,
    gallery: [placeholder800x1000, placeholder800x1000, placeholder800x1000, placeholder800x1000],
  },
  product2: {
    main: placeholder400x500,
    gallery: [placeholder800x1000, placeholder800x1000, placeholder800x1000],
  },
  product3: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product4: {
    main: placeholder400x500,
    gallery: [placeholder800x1000, placeholder800x1000],
  },
  product5: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product6: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product7: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product8: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product9: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product10: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product11: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product12: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product13: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product14: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product15: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product16: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product17: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product18: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  product19: {
    main: placeholder400x500,
    gallery: [placeholder800x1000],
  },
  // Page Images
  homePage: {
    hero1: placeholder1800x1000_1,
    hero2: placeholder1800x1000_2,
    hero3: placeholder1800x1000_3,
    promo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1800' height='1000' viewBox='0 0 1800 1000'%3E%3Crect width='100%25' height='100%25' fill='%23E5E7EB'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='100' fill='%239CA3AF' dominant-baseline='middle' text-anchor='middle'%3E1800x1000%3C/text%3E%3C/svg%3E",
  },
  collections: {
    couple: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect width='100%25' height='100%25' fill='%23D1D5DB'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='50' fill='%236B7280' dominant-baseline='middle' text-anchor='middle'%3ECouple%3C/text%3E%3C/svg%3E",
    christmas: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect width='100%25' height='100%25' fill='%23FECACA'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='50' fill='%23B91C1C' dominant-baseline='middle' text-anchor='middle'%3EChristmas%3C/text%3E%3C/svg%3E",
    company: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect width='100%25' height='100%25' fill='%23BFDBFE'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='50' fill='%231E3A8A' dominant-baseline='middle' text-anchor='middle'%3ECompany%3C/text%3E%3C/svg%3E",
  }
};