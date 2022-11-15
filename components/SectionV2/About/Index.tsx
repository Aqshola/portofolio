import React from "react";
import { motion } from "framer-motion";
import {
  boxChildTransition,
  containerTransition,
  opacityTransition,
  svgParentTransition,
  svgPathTransition,
} from "utils/transition";
import { useInView} from "react-intersection-observer"

export default function Index() {
  const [ref, inView] = useInView();
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView?"show":"hidden"}
      variants={containerTransition}
      id="About"
      className="mt-16 flex min-h-screen w-full"
    >
      <motion.div
        variants={containerTransition}
        initial="hidden"
        animate="show"
        className="bg-yellow-primary flex w-full flex-col justify-center p-5 py-16 md:w-1/2 md:p-10"
      >
        <motion.h2
          variants={boxChildTransition}
          className="text-5xl font-bold md:text-6xl "
        >
          About me?
        </motion.h2>
        <motion.p
          variants={opacityTransition}
          className="mt-10 leading-relaxed"
        >
          Yahallo Im Shola, high spirited and exciting frontend developer.
          Currently in my final year of college also doing some personal
          projects for having fun and exploring some tech.
        </motion.p>
        <motion.p variants={opacityTransition} className="mt-5 leading-relaxed">
          Started learning programming in my first year of college, it was when
          I join Idcamp but sadly {"didn't"} get elected to continue the next step.
          but from there, I got some enlightenment and began exploring web
          development, focusing on frontend development using React Js as the
          main tech stack. sometimes im doing backend stuff if {"it's"} necessary
        </motion.p>
        <motion.p variants={opacityTransition} className="mt-5 leading-relaxed">
          You can see more {'"about me"'} in the next section or just check on {" "}
          <a href="https://drive.google.com/file/d/1OszXSce3oFGXFKHURJu8B_oXfp0Oq7N1/view?usp=share_link" className="transition-all underline cursor-pointer border-black">
            my resume
          </a>
        </motion.p>
      </motion.div>
      <motion.div
        variants={containerTransition}
        initial="hidden"
        animate="show"
        className="hidden w-1/2 items-center justify-center p-10 py-10 md:flex"
      >
        <motion.svg
          initial="hidden"
          animate="show"
          variants={svgParentTransition}
          width="571"
          height="544"
          viewBox="0 0 571 544"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M148.349 188.637C142.01 186.087 134.881 184.988 128.285 187.157C127.174 187.522 127.382 189.123 128.558 189.182C132.33 189.37 136.003 189.655 139.591 190.419C135.706 191.37 131.754 193.587 128.221 194.793C122.372 196.79 116.434 198.523 110.432 199.993C98.331 202.959 85.983 204.837 73.548 205.617C48.75 207.172 24.512 204.111 0.401988 198.425C-0.0150118 198.326 -0.163012 198.91 0.226988 199.058C23.646 207.855 49.521 210.941 74.43 209.766C86.682 209.188 98.9 207.57 110.879 204.935C117.202 203.544 123.459 201.857 129.625 199.886C134.021 198.48 140.161 197.316 143.883 194.177C143.386 195.327 142.889 196.478 142.391 197.627C141.427 199.857 140.286 201.775 140.534 204.238C140.692 205.815 142.346 206.534 143.575 205.497C145.452 203.913 145.99 201.753 146.838 199.502C147.86 196.792 148.881 194.083 149.903 191.373C150.36 190.159 149.378 189.05 148.349 188.637Z"
            fill="black"
          />
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M469.301 152.138C471.456 152.943 472.878 149.936 471.445 148.456C470.674 147.661 469.805 146.964 468.873 146.336C475.421 145.488 482.245 143.129 487.642 141.088C496.724 137.652 505.207 132.859 512.785 126.784C528.801 113.943 541.894 87.0791 565.886 89.7551C566.156 89.7851 566.19 89.3691 565.947 89.2941C544.572 82.6711 530.125 102.676 516.864 115.671C509.147 123.234 500.14 129.371 490.192 133.614C485.345 135.681 480.3 137.29 475.157 138.442C469.945 139.609 464.285 139.392 459.225 140.957C458.478 141.189 457.93 141.726 457.61 142.372C457.153 142.306 456.697 142.248 456.241 142.199C459.336 139.588 462.616 137.213 465.927 134.869C466.27 134.627 466.068 134.09 465.638 134.185C459.539 135.526 454.312 138.609 449.497 142.568C447.947 143.841 449.347 146.073 451 146.196C454.352 146.444 457.642 147.138 460.814 148.252C463.78 149.294 466.368 151.044 469.301 152.138Z"
            fill="black"
          />
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M522.659 245.167C526.776 251.051 533.334 263.613 522.838 267.017C516.159 269.182 506.505 266.569 502.903 260.202C498.389 252.222 506.153 245.46 512.768 242.409C514.672 241.53 516.656 240.804 518.688 240.188C520.104 241.771 521.44 243.425 522.659 245.167ZM570.592 237.081C555.018 232.534 537.117 231.265 521.008 235.14C518.375 232.488 515.68 230.175 513.303 228.351C499.493 217.756 480.53 210.535 463.089 209.733C461.183 209.646 460.36 211.804 461.04 213.217C460.571 212.477 460.111 211.731 459.66 210.979C461.668 209.882 463.784 209.135 466.124 208.712C467.554 208.454 469.145 208.591 470.53 208.228C471.355 208.012 471.391 207.405 472.322 207.292C472.619 207.256 472.802 206.854 472.488 206.681C471.628 206.208 471.41 205.408 470.53 204.971C469.144 204.282 466.452 204.388 464.982 204.49C461.321 204.744 457.855 205.98 454.694 207.801C453.374 208.562 453.12 210.152 453.739 211.445C455.256 214.615 457.223 217.57 459.353 220.358C461.199 222.773 463.14 225.636 465.874 227.063C468.017 228.183 470.263 225.938 469.144 223.792C467.779 221.173 465.299 219.169 463.508 216.813C462.74 215.803 462.037 214.759 461.355 213.702C461.624 214.001 461.99 214.23 462.466 214.337C477.845 217.793 492.554 220.664 506.031 229.435C509.342 231.588 512.482 234.035 515.356 236.758C515.012 236.871 514.66 236.97 514.316 237.088C503.016 240.992 490.235 253.083 500.43 265.105C507.665 273.639 528.343 277.261 532.786 263.904C535.625 255.37 530.725 246.178 524.354 238.762C529.372 237.731 534.533 237.198 539.463 236.744C549.74 235.796 560.204 236.318 570.417 237.714C570.822 237.769 571.011 237.203 570.592 237.081Z"
            fill="black"
          />
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M112.964 89.067C105.448 94.25 97.7998 88.185 99.6738 79.747C101.339 72.255 108.088 68.944 115.028 67.74C118.852 74.615 120.033 84.192 112.964 89.067ZM41.7858 66.085C42.0158 66.242 42.3248 65.929 42.1708 65.7C40.8698 63.761 54.5508 58.896 56.3678 58.177C60.2118 56.657 64.1238 55.293 68.1238 54.243C76.4668 52.052 85.2458 51.243 93.7148 53.217C100.22 54.735 106.521 57.81 111.199 62.641C104.862 64.244 98.9578 67.659 95.9558 73.718C93.2038 79.274 92.8028 86.73 96.9338 91.74C101.346 97.089 109.046 97.442 114.783 94.054C121.486 90.096 123.866 82.05 122.632 74.673C122.181 71.979 121.339 69.478 120.193 67.17C136.29 65.981 154.931 68.28 168.727 76.567C168.824 76.626 168.921 76.659 169.017 76.705C166.834 77.841 164.692 79.082 163.036 80.785C161.542 82.32 163.037 84.96 165.133 84.388C168.853 83.377 172.123 80.669 175.37 78.637C176.653 77.836 176.901 76.088 175.841 74.987C171.038 69.997 166.39 64.796 161.186 60.222C160.028 59.205 157.873 60.57 158.904 61.983C160.298 63.895 161.772 65.747 163.283 67.57C157.066 65.041 150.487 63.526 143.752 62.642C134.945 61.488 125.535 60.664 116.629 61.703C109.841 53.502 98.6548 48.802 88.1038 48.098C77.3778 47.382 66.6418 50.684 56.9068 54.881C55.0278 55.692 37.0718 62.859 41.7858 66.085Z"
            fill="black"
          />
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M463.955 533.893C472.833 533.464 469.262 517.919 468.625 512.21C461.596 491.358 463.248 468.609 460.483 446.753C458.761 426.35 456.548 406.011 454.687 385.624C451.031 344.241 424.777 259.995 394.817 246.446C391.043 229.87 375.455 214.397 355.733 214.397C342.281 198.459 326.091 187.242 305.324 189.507C296.743 189.898 288.42 199.008 280.197 200.768C275.593 201.403 234.734 199.768 226.549 204.633C220.848 207.563 215.701 212.978 217.377 219.872C220.052 228.224 211.74 219.187 194.401 228.101C159.043 249.356 180.171 277.792 181.108 278.673C159.043 309.401 139.758 334.331 130.835 371.89C125.052 399.775 125.703 428.561 120.858 456.589C119.147 466.307 116.522 475.693 113.682 485.131C110.604 497.482 109.108 528.266 107.411 528.541C104.321 529.309 109.197 535.661 112.472 535.666C203.261 550.74 295.481 536.29 386.758 533.929C412.482 533.034 438.233 532.828 463.955 533.893Z"
            fill="#FAC39D"
          />
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M280.311 227.826C280.311 237.498 313.862 273.436 325.44 271.065C333.159 269.484 344.822 259.176 360.428 240.141V227.826L357.058 214.42C376.151 215.094 391.128 230.243 394.817 246.446C424.478 259.859 450.505 342.563 454.57 384.37L454.687 385.624C456.548 406.011 458.761 426.351 460.483 446.753C463.248 468.609 461.596 491.358 468.625 512.21L468.667 512.564C469.4 518.535 472.656 533.473 463.955 533.893C438.233 532.828 412.482 533.034 386.758 533.929C295.481 536.29 203.261 550.74 112.472 535.666C109.197 535.661 104.321 529.309 107.411 528.541C109.108 528.266 110.604 497.482 113.682 485.131L114.267 483.179C116.88 474.397 119.265 465.637 120.858 456.589C125.703 428.561 125.052 399.775 130.835 371.89C139.758 334.331 159.043 309.402 181.108 278.673C180.171 277.792 159.043 249.357 194.401 228.101C211.74 219.187 220.052 228.224 217.377 219.872C215.701 212.978 220.848 207.564 226.549 204.633C234.734 199.768 275.593 201.403 280.197 200.768C282.336 200.31 284.482 199.355 286.637 198.186L286.263 199.432C282.295 212.743 280.311 222.207 280.311 227.826Z"
            fill="#FDDA34"
          />
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M326.35 281.386C326.392 280.969 326.953 280.97 326.996 281.386L327.637 287.579C328.417 295.144 329.168 302.694 329.712 310.293C330.391 319.771 330.844 329.245 331.063 338.743C331.826 371.824 331.977 404.921 332.042 438.01C336.512 437.7 340.983 437.401 345.456 437.112C348.491 436.916 351.526 436.728 354.561 436.543L362.301 436.073L365.488 435.877C367.641 435.744 370.087 435.201 371.593 437.111C372.195 437.875 372.498 438.868 371.936 439.775C370.64 441.868 368.649 441.795 366.398 441.886C364.273 441.972 362.149 442.056 360.025 442.138C355.473 442.315 350.921 442.482 346.367 442.61C341.588 442.744 336.812 442.853 332.035 442.934C331.987 456.903 331.409 470.854 330.785 484.807L330.503 491.086C329.739 508.067 328.917 525.062 327.749 542.02C327.653 543.408 325.691 543.405 325.596 542.02C324.281 522.923 323.414 503.785 322.554 484.662C321.93 470.797 321.567 456.928 321.394 443.058C320.763 443.062 320.132 443.071 319.5 443.073C301.571 443.151 283.647 443.229 265.717 443.061C265.747 443.096 265.777 443.132 265.796 443.179C267.094 446.245 267.217 450.157 267.186 453.447C267.149 457.221 266.642 460.948 265.773 464.618C262.663 477.764 254.639 489.539 245.5 499.274L245.202 499.59C243.046 501.87 240.573 504.161 239.25 507.065C237.898 510.03 237.429 513.498 236.761 516.684L236.684 517.05L234.075 529.11C233.246 532.941 233.011 538.528 229.982 541.291C227.155 543.87 223.411 542.523 222.081 539.203C221.043 536.612 222.077 533.766 222.692 531.176L227.512 510.897C228.304 507.59 229.169 504.261 230.878 501.29C232.629 498.247 235.196 496.041 237.815 493.784C242.774 489.51 247.327 484.618 251.177 479.32C255.026 474.025 258.315 468.187 260.622 462.049C261.777 458.976 262.723 455.784 263.376 452.566C263.997 449.512 263.991 446.349 264.655 443.328C264.701 443.119 264.877 442.976 265.078 442.913C265.031 442.778 265.104 442.596 265.292 442.584L279.955 441.641C292.989 440.799 306.023 439.936 319.045 438.95L321.346 438.784C321.167 420.277 321.319 401.767 321.653 383.253C321.959 366.276 321.965 349.294 322.47 332.319C322.721 323.894 323.261 315.489 323.863 307.082C324.479 298.484 325.464 289.958 326.35 281.386ZM188.67 379.823C188.514 378.88 189.699 378.296 190.245 379.159C196.489 389.01 199.499 399.71 200.768 411.238C201.889 421.412 201.559 431.733 201.001 441.934C200.405 452.814 199.711 463.691 199.008 474.565L197.929 491.24L195.221 533.045C195.027 536.035 194.349 538.754 191.777 540.144C191.451 540.417 191.111 540.661 190.716 540.872C189.326 541.616 187.483 541.24 186.68 539.813L187.002 540.025C187.282 540.202 186.967 539.955 186.056 539.285L185.283 538.283C184.721 537.438 184.362 536.607 184.218 535.602C183.994 534.041 184.284 532.329 184.386 530.76L186.161 503.347C187.542 482.036 189.154 460.732 190.369 439.41C190.935 429.473 191.332 419.526 191.063 409.571C190.796 399.671 190.292 389.604 188.67 379.823ZM242.684 196.318L243.031 196.26C255.432 194.198 268.917 194.583 280.251 200.567C280.345 200.617 280.302 200.773 280.197 200.768L276.549 200.622C265 200.169 253.487 199.902 242.131 202.618L240.969 202.898C236.88 203.896 232.609 205.119 229.324 207.822C226.185 210.406 224.621 214.393 223.118 218.063L222.917 218.547C221.392 222.172 219.462 225.61 216.119 227.876C211.789 230.811 206.581 230.452 201.617 230.85C192.875 231.554 185.728 237.895 182.172 245.655C180.019 250.354 179.101 255.622 178.919 260.76C178.826 263.376 178.812 266.094 179.16 268.693C179.272 269.524 180.298 272.551 180.821 272.478C181.984 272.317 183.047 272.924 183.41 273.854C186.282 271.077 189.237 268.379 192.287 265.779C199.889 259.298 208.078 253.424 216.702 248.377C223.284 244.524 230.226 240.708 237.416 237.822C236.846 237.81 236.284 237.923 235.741 238.206C235.503 238.331 235.266 238.032 235.454 237.834C237.718 235.449 240.431 235.11 243.165 235.746C243.749 235.56 244.332 235.38 244.919 235.21C245.21 235.125 245.356 235.527 245.118 235.682L244.446 236.112C247.429 237.112 250.358 239.078 252.676 240.63C259.337 245.085 265.199 250.532 271.142 255.877L272.222 256.846C277.453 261.521 282.818 266.064 288.761 269.815C291.872 271.778 295.14 273.594 298.567 274.944C301.507 276.104 306.294 276.833 307.671 279.943C308.894 281.431 308.383 283.331 306.95 284.332C304.532 286.995 299.697 285.275 296.816 284.166C293.344 282.828 289.979 281.221 286.771 279.336C280.542 275.676 274.798 271.125 269.448 266.284C263.86 261.227 258.59 255.856 253.155 250.64C250.8 248.381 248.5 246.068 246.141 243.812L244.957 242.689C243.753 241.559 242.038 239.798 240.205 238.732C236.75 240.794 233.243 242.772 229.82 244.887C225.042 247.84 220.404 251.006 215.838 254.277C207.048 260.573 198.718 267.624 190.985 275.182C176.802 289.043 164.719 304.871 154.163 321.631L153.361 322.908C147.363 332.501 141.69 342.403 137.668 353.002C133.243 364.666 131.091 376.932 129.922 389.313C128.761 401.606 128.37 413.961 127.073 426.242C125.743 438.838 123.122 451.155 120.142 463.45L119.431 466.365C116.734 477.375 113.95 488.386 112.564 499.657C111.824 505.677 111.379 511.78 111.479 517.849C111.58 523.954 112.539 529.923 113.312 535.963C113.608 538.277 111.333 540.208 109.297 540.515C106.956 540.867 104.945 539.372 104.217 537.195C101.949 530.409 101.537 522.907 101.608 515.785C101.68 508.554 102.602 501.37 103.899 494.263C106.451 480.285 110.388 466.596 113.682 452.785C116.585 440.611 118.533 428.417 119.584 415.946C120.674 403.008 121.327 390.027 123.315 377.182C125.278 364.501 128.972 352.388 134.542 340.826C139.614 330.298 145.936 320.389 152.565 310.784C160.614 299.12 169.454 288.022 179.336 277.91C178.448 277.871 177.537 277.584 176.7 277.062C174.139 275.463 172.947 272.336 172.58 269.48C171.722 262.8 171.929 255.826 173.645 249.294C176.414 238.758 183.6 229.397 194.015 225.599C196.695 224.621 199.545 224.264 202.386 224.194C205.082 224.127 208.026 224.479 210.627 223.623C214.768 222.261 216.542 217.38 218.097 213.68L218.168 213.51C220.162 208.796 222.554 204.754 226.872 201.81C231.478 198.669 237.25 197.24 242.684 196.318ZM360.52 214.964C364.247 213.67 368.906 214.844 372.551 215.975C376.611 217.235 380.363 219.555 383.58 222.311C386.973 225.217 389.778 228.806 391.759 232.815L391.949 233.201C393.758 236.92 395.82 242.025 394.907 246.11C394.881 246.226 394.851 246.338 394.817 246.446C402.211 250.089 409.04 254.653 414.986 260.437C421.91 267.171 427.773 274.835 432.735 283.114C452.44 315.997 455.909 355.488 458.236 392.989L458.817 402.497C460.08 423.029 461.559 443.512 465.401 463.76L465.681 465.222C469.788 486.422 475.666 507.784 475.07 529.532C474.892 536.048 465.271 536.004 464.992 529.532C463.942 505.173 458.263 481.653 454.417 457.674C447.65 415.487 451.041 371.995 441.453 330.231C437.69 313.841 431.862 297.942 423.539 283.312C419.428 276.085 414.724 269.101 409.214 262.866C404.473 257.501 399.546 252.338 394.006 247.827C392.236 249.602 388.699 248.698 387.774 246.11C387.139 244.332 387.325 242.253 386.917 240.39C386.539 238.662 386.018 236.948 385.323 235.32C383.938 232.076 381.906 228.96 379.56 226.335C377.025 223.496 374.112 221.138 370.853 219.191C367.571 217.231 363.981 216.646 360.52 215.213C360.404 215.165 360.393 215.008 360.52 214.964ZM374.999 440.425C375.005 440.254 375.206 440.173 375.33 440.288C376.637 441.491 377.426 443.219 378.388 444.699C379.497 446.406 380.662 448.078 381.883 449.707C384.329 452.97 387.053 456.045 389.799 459.059C392.352 461.861 395.074 464.545 397.897 467.075C400.955 469.817 404.383 472.263 407.162 475.299C412.96 481.634 413.897 490.328 415.121 498.492L415.255 499.375C416.001 504.22 416.669 509.078 417.272 513.943C417.565 516.309 417.857 518.678 418.096 521.05L418.169 521.802C418.382 524.124 418.44 526.481 417.107 528.51C415.681 530.681 412.438 531.442 410.51 529.36C407.197 525.784 407.818 519.432 407.387 514.831C407.031 511.026 406.627 507.227 406.175 503.433L405.945 501.536C405.412 497.22 404.979 492.818 403.993 488.577C403.123 484.842 401.466 482.023 398.747 479.317C396.008 476.592 393.162 474.047 390.634 471.112C387.953 467.999 385.534 464.661 383.355 461.177C381.491 458.197 379.996 454.954 378.627 451.716L378.4 451.176C377.077 448.017 374.896 443.905 374.999 440.425ZM422.829 304.75C422.858 304.309 423.508 304.302 423.518 304.75C423.6 308.539 423.679 312.328 423.757 316.118C424.39 346.652 424 377.26 427.061 407.69C428.504 422.037 431.162 436.174 434.238 450.252C435.812 457.455 437.463 464.642 439.032 471.846C440.561 478.868 442.2 485.923 443.413 493.01C444.605 499.975 445.672 506.994 446.151 514.048L446.21 514.969C446.417 518.386 447.401 523.412 445.521 526.441C443.484 529.722 439.584 529.781 437.402 526.649C435.352 523.708 435.862 518.477 435.5 514.969C435.132 511.394 434.743 507.817 434.301 504.251C433.439 497.295 432.302 490.354 431.121 483.446C428.66 469.058 425.09 454.851 422.456 440.486C419.755 425.767 417.836 410.943 417.755 395.956C417.674 380.842 419.273 365.758 420.079 350.677C420.899 335.36 421.831 320.055 422.829 304.75ZM278.723 209.775C279.542 207.015 282.432 205.289 285.252 206.064C287.836 206.775 289.97 209.915 288.959 212.601C287.857 215.532 285.93 218.031 284.306 220.695C282.805 223.156 280.617 225.095 279.088 227.513L280.772 229.33C281.615 230.237 282.46 231.138 283.315 232.024L286.252 235.07C288.54 237.437 290.843 239.791 293.21 242.076C300.171 248.797 307.242 255.297 315.038 261.053C316.812 262.362 318.601 263.664 320.439 264.884L321.125 265.339C322.386 266.165 323.793 266.978 325.317 266.838C329.02 266.498 332.365 262.562 334.91 260.112L335.043 259.984C341.348 253.979 347.187 247.413 352.291 240.354C353.424 238.785 354.522 237.19 355.59 235.576C353.123 232.69 353.712 227.058 353.576 223.558C353.48 221.098 353.473 218.637 353.459 216.174L353.453 215.677C353.423 214.084 353.351 212.555 354.384 211.244C354.444 211.168 354.569 211.17 354.646 211.21C356.061 211.952 356.497 213.195 357.101 214.59L357.164 214.734C357.899 216.408 358.603 218.097 359.315 219.78C360.06 221.542 360.744 223.33 361.437 225.113C361.759 225.943 362.067 226.775 362.368 227.613C362.551 228.148 362.741 228.68 362.936 229.211L362.982 229.252C363.239 229.47 363.457 229.701 363.645 229.939C364.435 230.335 365.062 231.055 365.357 232.114C365.998 234.418 364.672 236.297 363.489 238.126C358.683 245.557 353.205 252.638 347.116 259.062C344.092 262.253 340.91 265.301 337.598 268.192L337.019 268.694C334.043 271.254 330.813 273.678 326.839 274.277C322.189 274.977 318.404 272.662 314.844 269.996L314.489 269.728C311.114 267.171 307.807 264.524 304.604 261.755C298.071 256.11 291.857 250.049 286.342 243.399C280.977 236.931 275.674 229.698 272.367 221.915C272.165 221.441 272.696 220.945 273.111 221.341C274.726 222.88 276.28 224.503 277.816 226.146C277.859 223.727 277.413 221.287 277.661 218.853C277.964 215.894 277.876 212.624 278.723 209.775Z"
            fill="black"
          />
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325.86 34.6941C352.043 34.6941 379.124 54.9833 388.722 67.9304C396.791 78.8156 401.135 128.038 401.135 161.304C401.135 168.261 404.976 181.376 403.855 188.03C399.748 212.417 381.856 232.868 346.442 232.868C311.029 232.868 285.639 218.835 259.317 181.157C246.545 181.157 240.356 171.366 240.266 155.914C240.176 140.462 252.594 134.84 252.594 134.84C252.594 134.84 248.166 73.8605 259.317 57.9843C270.467 42.1081 299.678 34.6941 325.86 34.6941Z"
            fill="#FAC39D"
          />
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M314.842 26.0717C331.373 24.3983 347.572 25.8043 363.863 28.7137C365.108 28.9391 365.814 29.7555 366.076 30.737C373.75 31.0873 381.432 31.6502 389.095 32.0697C391.876 32.2218 393.453 34.9689 392.185 37.4495C391.932 37.9423 391.668 38.4217 391.401 38.9011L391.737 38.7904C394.042 38.051 396.532 37.6865 398.779 38.8601C401.638 40.3537 402.759 43.6494 402.127 46.6827C401.965 47.4572 401.693 48.1994 401.384 48.9236C402.012 48.8821 402.643 48.8959 403.27 48.9789C406.609 49.4215 409.09 51.98 409.265 55.3867C409.523 60.5309 406.208 65.7498 402.302 69.4327C402.869 70.5994 403.086 71.9732 402.85 73.3654C402.38 76.1175 400.352 77.7656 398.001 78.8406C398.982 81.9528 399.445 85.2065 399.172 88.5316C399.08 89.6417 398.109 90.5586 397.084 90.7835C400.905 101.301 402.839 112.592 404.23 123.595C405.221 131.423 405.71 139.297 405.769 147.184C405.798 150.745 405.74 154.309 405.59 157.871L405.53 159.206C405.345 163.056 405.336 167.099 404.645 170.907C407.006 174.922 407.955 179.905 408.357 184.404C408.855 189.973 408.066 195.717 406.309 201.014C399.678 221.03 379.666 233.661 359.565 236.944C340.96 239.982 319.43 235.893 308.557 218.997C308.386 218.73 308.75 218.509 308.963 218.684C316.742 225.008 325.765 227.83 335.569 229.203C352.52 231.573 371.573 227.553 385.176 216.895C391.705 211.778 396.413 204.329 398.484 196.312C399.54 192.214 399.904 187.94 399.489 183.722C399.065 179.444 397.17 175.793 395.976 171.75C395.574 170.385 395.999 169.118 396.833 168.215C397.068 164.932 397.622 161.622 397.833 158.349C398.069 154.629 398.212 150.908 398.263 147.184C398.36 139.457 398.037 131.717 397.387 124.024C396.197 109.935 393.038 96.1891 391.185 82.2206C390.498 82.836 389.514 83.0887 388.483 82.551L388.376 82.4926L387.814 82.1704C387.781 82.1704 387.745 82.175 387.712 82.1791C383.862 82.553 379.869 82.0182 376.18 80.8699C372.32 79.6718 368.737 77.8278 365.537 75.3707C364.928 78.4543 364.674 81.5706 364.67 84.7146C364.666 86.6784 362.586 87.6977 360.935 86.8587C353.617 83.1426 346.627 78.8604 339.991 74.0477C339.216 78.0168 338.442 81.9855 337.662 85.9593C337.363 87.4902 335.412 88.1079 334.162 87.3796C329.192 84.4887 324.899 80.7044 321.404 76.2047C320.706 77.5388 320.006 78.8727 319.301 80.2036L318.24 82.1976C317.194 84.1568 315.792 86.3239 313.5 86.9504C311.074 87.6142 309.05 86.0427 308.234 83.8479C307.985 83.1661 307.754 82.4649 307.542 81.7596C305.476 86.476 303.143 91.0859 300.506 95.4838C296.549 102.08 291.799 107.958 287.064 113.988C285.625 115.818 283.163 114.071 282.965 112.292C282.849 111.245 282.753 110.194 282.669 109.147C279.91 114.714 277.031 120.229 273.894 125.584L274.343 127.343V127.343C275.637 132.543 276.712 137.778 277.88 143.005C278.258 144.692 277.361 147.103 275.39 147.39C273.036 147.733 270.808 148.935 268.397 148.108C265.767 147.205 265.247 144.933 264.006 142.779C263.758 142.35 263.47 141.956 263.16 141.582L263.081 141.684V141.684C262.888 141.938 262.427 141.661 262.542 141.371L262.677 141.035V141.035C261.61 139.904 260.334 138.96 259.16 137.944C256.372 137.474 253.235 137.989 251.313 139.121C246.937 141.702 244.927 147.022 244.886 151.914C244.835 157.639 246.61 164.075 249.607 168.971C250.926 171.123 252.734 173.068 255.122 174.023C257.493 174.972 260.061 174.678 262.473 175.572C264.068 176.167 265.05 177.937 264.087 179.541C264.022 179.652 263.948 179.753 263.879 179.859L264.596 180.811C265.089 181.47 265.604 182.176 266.083 182.911C267.31 184.322 268.601 185.682 269.851 187.069C272.16 189.627 274.402 192.255 276.675 194.85C278.819 197.299 281.088 199.598 283.426 201.862C285.635 204.006 288.392 205.808 290.421 208.095C292.394 210.326 292.929 214.221 289.683 215.512C286.091 216.944 282.911 213.588 280.493 211.351L280.392 211.257C275.959 207.18 271.957 202.52 268.778 197.389C265.63 199.532 261.076 199.737 257.941 197.595C256.291 196.467 255.025 194.573 254.41 192.513C253.83 192.643 253.25 192.719 252.685 192.71C252.394 192.879 252.102 193.043 251.807 193.196C249.469 194.412 246.596 193.869 245.527 191.282C244.552 188.934 245.556 186.267 246.434 184.005L246.615 183.538C247.113 182.247 247.662 180.841 248.344 179.518C246.444 178.089 244.821 176.314 243.447 174.295C238.831 167.495 236.526 157.551 237.545 149.438C238.158 144.543 240.458 139.472 244.226 136.171L244.088 135.811V135.811C243.032 133.133 242.072 130.445 241.45 127.615C240.722 124.305 240.366 120.875 240.044 117.505C239.361 110.388 239.546 103.109 240.454 96.0186C242.16 82.6728 246.486 69.5714 254.163 58.4661C251.986 55.8611 250.262 52.7955 251.161 49.2693C251.572 47.6508 252.507 46.1161 253.919 45.1891C254.698 44.6778 255.625 44.5995 256.404 44.1754L256.639 44.0464C256.981 43.8467 256.719 43.8678 256.515 42.9399C255.708 39.2331 256.377 35.6516 260.458 34.4208C264.299 33.2637 267.932 35.7208 270.206 38.6481C276.154 34.4295 283.993 32.2218 290.887 30.3456C298.726 28.2199 306.767 26.8927 314.842 26.0717ZM250.59 150.402C250.562 147.382 253.425 145.52 256.243 146.013C258.135 146.343 259.714 147.471 261.196 148.638L261.918 149.21C263.723 150.626 265.795 152.154 266.871 154.159C268.448 157.119 265.115 161.101 262.002 159.027C259.867 157.596 258.499 155.304 257.098 153.175L256.953 152.955C256.317 152.001 255.759 150.987 254.887 150.222L254.699 150.057C254.412 149.813 254.104 149.59 253.734 149.484C253.02 149.279 251.698 149.566 251.383 150.416L251.355 150.503C251.24 150.932 250.594 150.839 250.59 150.402Z"
            fill="black"
          />
          <motion.path
            variants={svgPathTransition}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M335.762 195.669C332.669 194.403 329.91 192.293 327.893 189.596C327.192 188.659 327.01 187.669 327.157 186.764C327.322 185.746 327.923 184.823 328.742 184.204C329.563 183.583 330.59 183.277 331.584 183.433C332.447 183.569 333.306 184.043 333.986 185.026L334.128 185.223C335.327 186.85 336.89 188.185 338.671 189.046C340.387 189.876 342.307 190.263 344.293 190.038C348.076 189.609 350.684 187.557 353.455 184.77C353.799 184.418 354.142 184.055 354.488 183.686C354.706 183.352 355.009 183.137 355.345 183.025C355.718 182.9 356.14 182.907 356.527 183.042C356.9 183.173 357.233 183.42 357.457 183.749C357.669 184.062 357.789 184.449 357.75 184.893C357.497 187.781 355.991 190.359 353.853 192.383C351.478 194.631 348.33 196.186 345.367 196.731C342.101 197.332 338.774 196.902 335.762 195.669V195.669ZM346.907 151.114C350.381 153.232 355.674 158.17 351.937 163.421C347.538 168.051 341.205 162.742 338.084 160.342C335.19 158.481 331.938 163.266 334.623 165.439C357.175 182.187 366.327 151.668 348.664 148.623C346.719 148.288 345.997 150.458 346.907 151.114ZM306.494 131.632C306.878 126.853 314.134 125.768 314.855 130.497C315.502 134.733 314.741 138.624 312.839 142.438C311.021 146.081 306.453 144.381 306.107 141.064C305.644 136.616 306.255 134.605 306.494 131.632ZM361.725 129.516C362.737 128.187 364.197 127.28 365.947 127.793C371.415 129.395 369.803 137.181 367.883 140.971C366.84 143.029 363.467 143.551 361.943 141.739C359.459 138.784 358.27 132.882 361.428 129.972C361.513 129.821 361.608 129.67 361.725 129.516ZM312.762 110.722L313.625 110.57C316.297 110.107 319.619 109.662 321.509 111.816C322.511 112.958 322.856 115.082 321.509 116.176C319.139 118.1 316.519 117.354 313.678 117.517C311.338 117.652 309.088 118.04 306.834 118.687C301.888 120.105 297.857 122.693 293.633 125.536C293.079 125.908 292.513 125.197 292.778 124.677C295.216 119.886 299.942 115.951 304.675 113.552C307.202 112.271 309.967 111.209 312.762 110.722ZM356.741 108.576L357.402 108.712C364.596 110.22 373.942 113.233 377.348 120.32C377.478 121.322 377.341 121.537 377.229 121.677L377.192 121.724C377.1 121.844 377.027 122.009 376.594 122.145C376.474 122.116 376.352 122.086 376.23 122.054C374.668 121.643 373.433 121.078 372.237 120.491L370.94 119.85C369.435 119.11 367.918 118.397 366.309 117.871C362.876 116.748 359.346 115.957 355.76 115.534C354.983 115.443 354.235 115.18 353.644 114.729C353.084 114.301 352.656 113.708 352.461 112.921C352.208 111.901 352.28 111.13 352.826 110.21C353.236 109.519 353.822 109.041 354.496 108.766C355.182 108.486 355.964 108.42 356.741 108.576Z"
            fill="black"
          />
        </motion.svg>
      </motion.div>
    </motion.section>
  );
}
