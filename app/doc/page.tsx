import React from 'react';
import '../../styles/globals.scss';

const DocPage = () => (
    <section className="container" style={{ padding: '2rem 0' }}>
        <h1>Boilerplate SCSS, Bootstrap & Layout Documentation</h1>
        <p>This guide explains the available SCSS variables, mixins, layout options, and Bootstrap usage in this boilerplate. Use it as a reference for building your frontend, similar to the Bootstrap docs.</p>

        <h2>Bootstrap Usage</h2>
        <p>Bootstrap 5 is included globally. You can use any Bootstrap classes in your components:</p>
        <pre>{`<button className="btn btn-primary">Bootstrap Button</button>`}</pre>
        <p>You can also combine Bootstrap with your custom SCSS styles.</p>

        <h2>SCSS Variables</h2>
        <pre>
            {`// styles/_variables.scss
$color-primary: #1a73e8;
$color-secondary: #e8f0fe;
$color-text: #222;
$color-bg: #fff;
$color-footer-bg: #f5f5f5;

$font-roboto: 'Roboto', sans-serif;
$font-opensans: 'Open Sans', sans-serif;

$font-size-xs: 0.75rem;
$font-size-sm: 0.875rem;
$font-size-md: 1rem;
$font-size-lg: 1.25rem;
$font-size-xl: 1.5rem;
$font-size-xxl: 2rem;

$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-bold: 700;

$container-width: 1200px;
$container-padding: 1rem;

$spacing-xs: 0.5rem;
$spacing-sm: 1rem;
$spacing-md: 2rem;
$spacing-lg: 3rem;
$spacing-xl: 4rem;
`}
        </pre>

        <h2>SCSS Mixins</h2>
        <pre>
            {`// styles/_mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin container {
  width: 100%;
  max-width: $container-width;
  margin: 0 auto;
  padding: 0 $container-padding;
}

@mixin font-size($size) {
  font-size: $size;
}
`}
        </pre>
        <h2>Media Queries</h2>
        <pre>
            {`// styles/_mediaqueries.scss
$breakpoint-sm: 480px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1280px;

@mixin respond-to($breakpoint) {
  @if $breakpoint == sm {
    @media (max-width: $breakpoint-sm) { @content; }
  } @else if $breakpoint == md {
    @media (max-width: $breakpoint-md) { @content; }
  } @else if $breakpoint == lg {
    @media (max-width: $breakpoint-lg) { @content; }
  } @else if $breakpoint == xl {
    @media (max-width: $breakpoint-xl) { @content; }
  }
}
`}
        </pre>
        <h3>Example: Responsive Font Size</h3>
        <pre>
            {`html {
  font-size: 16px;
  @include respond-to(sm) {
    font-size: 14px;
  }
  @include respond-to(md) {
    font-size: 15px;
  }
  @include respond-to(lg) {
    font-size: 16px;
  }
  @include respond-to(xl) {
    font-size: 18px;
  }
}
`}
        </pre>

        <h2>Fonts</h2>
        <p>Google Fonts are imported in <code>styles/_fonts.scss</code> and set globally. Use <code>$font-roboto</code> or <code>$font-opensans</code> for font-family.</p>

        <h2>Layout & Container</h2>
        <pre>
            {`<div className="container">
  ...content...
</div>
`}
        </pre>
        <p>The <code>container</code> class centers and constrains content width. You can also use the <code>@include container</code> mixin in your SCSS.</p>

        <h2>Header & Footer</h2>
        <p>Reusable components in <code>components/Header.tsx</code> and <code>components/Footer.tsx</code>. Customize navigation and branding as needed.</p>

        <h2>Customizing</h2>
        <ul>
            <li>Edit <code>styles/_variables.scss</code> for colors, fonts, spacing, etc.</li>
            <li>Add or modify mixins in <code>styles/_mixins.scss</code>.</li>
            <li>Adjust breakpoints in <code>styles/_mediaqueries.scss</code>.</li>
            <li>Import new fonts in <code>styles/_fonts.scss</code>.</li>
        </ul>

        <h2>Example: Custom Button</h2>
        <pre>
            {`.btn {
  background: $color-primary;
  color: $color-bg;
  padding: $spacing-sm $spacing-md;
  border: none;
  border-radius: 4px;
  font-family: $font-roboto;
  @include font-size($font-size-md);
  cursor: pointer;
  &:hover {
    background: darken($color-primary, 10%);
  }
}
`}
        </pre>
    </section>
);

export default DocPage;
