/**
 * The ASPIS shield mark, as a single inline path.
 *
 * Traced from `public/assets/aspis-logo-horizontal-electric.png` and verified
 * against that source at 0.9971 intersection-over-union. It is the same
 * geometry the favicon uses, so the tab icon and the marks inside the product
 * mock-ups cannot drift apart.
 *
 * The path fills with `currentColor`, so a caller sets the color by setting
 * `color`. That matters here: the brand blue `#2D449C` measures 2.32:1 against
 * the site's near-black, so on the dark console mocks the mark has to be drawn
 * in a light tint (a near-white or the electric blue) rather than the literal
 * brand hex. Use MARK_ON_DARK unless you have measured something better.
 *
 * viewBox is the path's own measured bounding box (999.65 x 1148.91), so the
 * mark fills the box it is given with no built-in padding — wrap it if you
 * want breathing room.
 */

/** Light tint for the mark on the dark surfaces used by the mocks. */
export const MARK_ON_DARK = '#A9BEFF';

export default function AspisMark({
  size = 24,
  title,
  style,
}: {
  size?: number | string;
  /** Omit for decoration; pass a label when the mark is the only branding. */
  title?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 999.65 1148.91"
      width={size}
      height={size}
      style={{ display: 'block', overflow: 'visible', ...style }}
      {...(title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true })}
      focusable="false"
    >
      <path d="M491 1145.35C372.63 1096.98 282.41 1036.52 207.52 955.4C49.32 784.02 -18.84 537.03 4.58 220C5.46 208.18 6.31 198.36 6.49 198.18C6.67 198 21.82 194.11 40.16 189.53C220.59 144.45 361.42 87.58 482.64 10.85L499.78 0L521.14 13.39C642.29 89.34 788.2 147.74 964 190.64C978.58 194.2 991.2 197.31 992.06 197.56C993.36 197.94 993.91 202.31 995.36 223.76C1002.55 330.07 1000.97 410.05 989.95 498.73C961.62 726.56 868.41 905.15 713.57 1028.29C668.24 1064.34 616.02 1096.59 560.91 1122.55C545.74 1129.7 500.39 1149.23 499.7 1148.91C499.59 1148.86 495.68 1147.26 491 1145.35ZM511.59 1086.89C691.42 1009.68 816.31 883.21 884.73 709C918.57 622.86 938.01 528.22 945.03 415.5C947.61 374.04 947.3 300.65 944.35 250.87L943.71 240.24L927.61 236.04C840.76 213.41 767.81 189.78 697.5 161.52C634.61 136.24 567.01 102.99 515.49 71.99C508.22 67.62 501.6 63.78 500.77 63.47C499.91 63.13 494.26 65.92 487.39 70.08C376.2 137.29 235.9 193.73 80.13 233.88C67.28 237.2 56.59 240.08 56.38 240.29C53.96 242.71 52.12 360.19 53.91 398.5C58.68 500.96 73.31 586.14 100.19 668C149.43 817.97 237.3 935.33 363.55 1019.7C401.53 1045.09 442.76 1067.32 489 1087.34C494.77 1089.84 499.54 1091.91 499.59 1091.94C499.64 1091.97 505.04 1089.7 511.59 1086.89ZM484 1033.68C445.42 1015.67 408.23 994.08 374.72 970.22C361.04 960.48 335.51 940.44 325.04 931.23L320.58 927.3L354.56 875.4C373.25 846.86 413.51 785.36 444.02 738.75C474.53 692.14 499.73 654.03 500 654.06C500.64 654.13 678.5 926.18 678.5 927.09C678.5 928.02 660.17 943.62 647.13 953.78C608.77 983.68 562.5 1011.81 516.19 1033.4C507.22 1037.58 499.8 1040.98 499.69 1040.95C499.59 1040.93 492.52 1037.65 484 1033.68ZM230.59 842.06C195.29 793.95 165.17 736.93 143.14 676.46C139.32 665.98 135.49 655.02 134.62 652.09L133.04 646.77L152.27 626.59C162.85 615.49 237.52 536.91 318.2 451.96C415.65 349.36 466.67 296.35 470.15 294.08C479.17 288.2 488.01 285.64 499.5 285.58C512.88 285.51 523.85 289.23 533.64 297.15C535.91 298.99 611.83 378.49 702.34 473.81L866.91 647.13L861.09 663.81C838.32 729.15 810.22 784.31 773.24 836.25C767.46 844.36 762.46 850.99 762.12 850.98C761.78 850.97 745.69 826.79 726.36 797.23C707.04 767.68 653.57 685.9 607.56 615.5C546.69 522.38 522.52 486.21 518.89 482.76C508.03 472.47 490.33 472.67 479.91 483.19C478.03 485.09 423.01 568.4 357.62 668.34C292.24 768.27 238.39 850.26 237.96 850.53C237.53 850.79 234.21 846.98 230.59 842.06Z" fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}
