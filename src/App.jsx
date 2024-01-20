
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

import nerdWallet from "./assets/nerdwallet.contenthash.91486057718363f6a3d741326df4b30d418430e2.svg"
import investPedia from "./assets/investopedia.contenthash.cf25078cb7ce013008895c9476ff5a105e96c5c2.svg"
import wordmark from "./assets/wordmark-surface-light.contenthash.a8692bc90191152aab2540310597006576ffb65d.svg"
import img from "./assets/moving-truck-support-640w.contenthash.684b190ef79412fd5a9c7797bf62247f2b911757.webp"
import  van from "./assets/vanlife.contenthash.d137accbf403b4f762924ae4741bd24cccdcad64.webm"
import notif from "./assets/notif-app-icon.contenthash.a0055c62e05910f6152abcecfb75d6cc0e39a909.svg"

import logo from "./assets/qwordmark-surface-dark.contenthash.0eff70a79bddf191f2be3b9c62051ae9a9c7619e.svg"


const navigation = [
  { name: 'Cash', href: '#' },
  { name: 'Bonds', href: '#' },
  { name: 'Automated Investing', href: '#' },
  { name: 'Stocks', href: '#' },
  { name: 'Learn', href: '#' },
]
const primaryFeatures = [
  {
    name: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ServerIcon,
  },
]
const secondaryFeatures = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const featuredTestimonial = {
  body: 'That’s not a question, but actually no. The weighted average annual expense ratio of the investments of a taxable Wealthfront portfolio is between 0.05–0.29%. Wealthfront also charges a 0.25% annual advisory fee, but for more than 96% of our clients with a recommended portfolio, that’s covered by Tax-Loss Harvesting.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'What we do is complicated. What you do is really really not. Just answer a few questions, and we’ll build an investment portfolio with your name on it. Then, as soon as your money arrives, we invest it just like we said we would. Bada bing, etc',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'But I’ve already got investments somewhere else.Again, that’s not a question. But you don’t always need to sell your investments to move them. We make the transfer process free, simple, and tax-efficient.Learn more',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
         
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      
      {
        body: 'What if I don’t like your picks? Can I choose my own investments?,Yup. You can customize your Wealthfront portfolio six ways to Sunday, both when you’re first opening a new account or at any point afterwards.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
         
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Tax-loss what now?Tax-Loss Harvesting. It’s a way to take advantage of changes in the market to help reduce your tax bill and give you more money to invest. For most clients, it generates savings worth at least 11 times our advisory fee, which means your tax savings more than pay for our fee.Learn more I love everything about this.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          
        },
      },
      {
        body: 'Read more frequently asked questions',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
         
        },
      },
    ],
  ],
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}





export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };




  const [totalAllocation, setTotalAllocation] = useState(41);

  const handleTotalSliderChange = (newValue) => {
    setTotalAllocation(newValue);
  };

  const calculateIndividualAllocation = (investment) => {
    return Math.round((investment / totalAllocation) * 100);
  };
  

  // const gradientColors = isHovered
  //   ? 'from-indigo-600 to-yellow-500'
  //   : 'border-indigo-600'; // Initial border color


  return (
    <div className="body-wrap boxed-container">
  <header className="site-header">
    <div className="container">
      <div className="site-header-inner">
        <div className="brand header-brand">
          <h1 className="m-0">
            <a href="#">
            <img src={logo} alt="" />
            </a>
          </h1>
        </div>
      </div>
    </div>
  </header>
  <main>
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">Automated index investing.</h1>
            <p className="hero-paragraph">
              There’s no secret to long-term wealth, but if there were it would
              be this
            </p>
            <div className="hero-cta">
              <a className="button button-shadow" href="#">
                Get Started
              </a>
            </div>
          </div>
          <div className="hero-app">
            <div className="hero-app-illustration">
              <svg width={999} height={931} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient
                    x1="92.827%"
                    y1="0%"
                    x2="53.422%"
                    y2="80.087%"
                    id="hero-shape-a"
                  >
                    <stop stopColor="#F9425F" offset="0%" />
                    <stop stopColor="#F97C58" stopOpacity={0} offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="92.827%"
                    y1="0%"
                    x2="53.406%"
                    y2="80.12%"
                    id="hero-shape-b"
                  >
                    <stop stopColor="#47A1F9" offset="0%" />
                    <stop
                      stopColor="#F9425F"
                      stopOpacity={0}
                      offset="80.532%"
                    />
                    <stop stopColor="#FDFFDA" stopOpacity={0} offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="8.685%"
                    y1="23.733%"
                    x2="85.808%"
                    y2="82.837%"
                    id="hero-shape-c"
                  >
                    <stop stopColor="#FFF" stopOpacity=".48" offset="0%" />
                    <stop stopColor="#FFF" stopOpacity={0} offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="79.483%"
                    y1="15.903%"
                    x2="38.42%"
                    y2="70.124%"
                    id="hero-shape-d"
                  >
                    <stop stopColor="#47A1F9" offset="0%" />
                    <stop stopColor="#FDFFDA" stopOpacity={0} offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="99.037%"
                    y1="26.963%"
                    x2="24.582%"
                    y2="78.557%"
                    id="hero-shape-e"
                  >
                    <stop stopColor="#FDFFDA" stopOpacity=".64" offset="0%" />
                    <stop
                      stopColor="#F97C58"
                      stopOpacity=".24"
                      offset="42.952%"
                    />
                    <stop stopColor="#F9425F" stopOpacity={0} offset="100%" />
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g className="hero-shape-top">
                    <g
                      className="is-moving-object is-translating"
                      data-translating-factor={280}
                    >
                      <path
                        d="M680.188 0c-23.36 69.79-58.473 98.3-105.34 85.531-70.301-19.152-189.723-21.734-252.399 91.442-62.676 113.175-144.097 167.832-215.195 118.57C59.855 262.702 24.104 287.85 0 370.988L306.184 566.41c207.164-4.242 305.67-51.612 295.52-142.11-10.152-90.497 34.533-163.55 134.054-219.16l4.512-119.609L680.188 0z"
                        fill="url(#hero-shape-a)"
                        transform="translate(1)"
                      />
                    </g>
                    <g
                      className="is-moving-object is-translating"
                      data-translating-factor={100}
                    >
                      <path
                        d="M817.188 222c-23.36 69.79-58.473 98.3-105.34 85.531-70.301-19.152-189.723-21.734-252.399 91.442-62.676 113.175-144.097 167.832-215.195 118.57-47.399-32.841-83.15-7.693-107.254 75.445L443.184 788.41c207.164-4.242 305.67-51.612 295.52-142.11-10.152-90.497 34.533-163.55 134.054-219.16l4.512-119.609L817.188 222z"
                        fill="url(#hero-shape-b)"
                        transform="rotate(-53 507.635 504.202)"
                      />
                    </g>
                  </g>
                  <g transform="translate(191 416)">
                    <g
                      className="is-moving-object is-translating"
                      data-translating-factor={50}
                    >
                      <circle
                        fill="url(#hero-shape-c)"
                        cx={336}
                        cy={190}
                        r={190}
                      />
                    </g>
                    <g
                      className="is-moving-object is-translating"
                      data-translating-factor={80}
                    >
                      <path
                        d="M683.766 133.043c-112.048-90.805-184.688-76.302-217.92 43.508-33.23 119.81-125.471 124.8-276.722 14.972-3.156 120.356 53.893 200.09 171.149 239.203 175.882 58.67 346.695-130.398 423.777-239.203 51.388-72.536 17.96-92.03-100.284-58.48z"
                        fill="url(#hero-shape-d)"
                      />
                    </g>
                    <g
                      className="is-moving-object is-translating"
                      data-translating-factor={100}
                    >
                      <path
                        d="M448.206 223.247c-97.52-122.943-154.274-117.426-170.26 16.55C261.958 373.775 169.717 378.766 1.222 254.77c-9.255 95.477 47.794 175.211 171.148 239.203 185.032 95.989 424.986-180.108 424.986-239.203 0-39.396-49.717-49.904-149.15-31.523z"
                        fill="url(#hero-shape-e)"
                        transform="matrix(-1 0 0 1 597.61 0)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            
            
            <svg
  viewBox="0 0 398 760"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  className="filter-shadow max-h-full w-full py-8"
>
  <g clipPath="url(#7a2ddd64b03adfa074b2bac43b4fa324)">
    <rect
      x="5.375"
      y="5.375"
      width="387.25"
      height="748.25"
      rx="28.125"
      fill="#A0A6CF"
      stroke="#A0A6CF"
      strokeWidth="11.25"
    />
    <g clipPath="url(#f94b317f95733a8e0373b16cf9414759)">
      <rect
        x={11}
        y={11}
        width={376}
        height={737}
        rx="22.5"
        className="fill-current text-space"
      />
      <rect
        width={375}
        height={48}
        transform="translate(11.5 31)"
        fill="fill-current text-space"
      />
      <path
        d="M56 56C56.5523 56 57 55.5523 57 55C57 54.4477 56.5523 54 56 54L41.4142 54L45.7071 49.7071C46.0976 49.3166 46.0976 48.6834 45.7071 48.2929C45.3166 47.9024 44.6834 47.9024 44.2929 48.2929L38.2961 54.2896C38.1133 54.4709 38 54.7222 38 55C38 55.2586 38.0982 55.4943 38.2592 55.6718C38.2701 55.6838 38.2814 55.6956 38.2929 55.7071L44.2929 61.7071C44.6834 62.0976 45.3166 62.0976 45.7071 61.7071C46.0976 61.3166 46.0976 60.6834 45.7071 60.2929L41.4142 56L56 56Z"
        className="fill-current text-blurple-light"
      />
      <text
        className="fill-current text-white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={19}
        letterSpacing="0em"
      >
        <tspan x={136} y={62}>
          Classic Portfolio
        </tspan>
      </text>
      <text
        className="fill-current text-blurple-light"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={19}
        letterSpacing="0em"
      >
        <tspan x="302.748" y="61.555">
          Manage
        </tspan>
      </text>
      <text
        className="fill-current text-white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={19}
        letterSpacing="0em"
      >
        <tspan x="92.5469" y="270.555">
          {" "}
        </tspan>
      </text>
      <text
        className="fill-current text-white"
        fillOpacity="0.6"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={19}
        letterSpacing="0em"
      >
        <tspan x="96.7402" y="270.555">
          all time
        </tspan>
      </text>
      <text
        className="fill-current text-money-in-light"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={19}
        letterSpacing="0em"
      >
        <tspan x="49.5" y="270.555">
          35.4%
        </tspan>
      </text>
      <path
        d="M40.634 261.389C41.0189 260.722 41.9811 260.722 42.366 261.389L45.8301 267.389C46.215 268.056 45.7339 268.889 44.9641 268.889H38.0359C37.2661 268.889 36.785 268.056 37.1699 267.389L40.634 261.389Z"
        className="fill-current text-money-in-light"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M161.5 260.667C164.446 260.667 166.833 263.054 166.833 266C166.833 268.946 164.446 271.333 161.5 271.333C158.554 271.333 156.167 268.946 156.167 266C156.167 263.054 158.554 260.667 161.5 260.667ZM161.5 260C158.186 260 155.5 262.686 155.5 266C155.5 269.314 158.186 272 161.5 272C164.814 272 167.5 269.314 167.5 266C167.5 262.686 164.814 260 161.5 260Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        d="M162.167 263.333C162.167 262.965 161.868 262.667 161.5 262.667C161.132 262.667 160.833 262.965 160.833 263.333C160.833 263.702 161.132 264 161.5 264C161.868 264 162.167 263.702 162.167 263.333Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M161.5 269.333C161.868 269.333 162.167 269.072 162.167 268.75L162.167 265.25C162.167 264.928 161.868 264.667 161.5 264.667C161.132 264.667 160.833 264.928 160.833 265.25L160.833 268.75C160.833 269.072 161.132 269.333 161.5 269.333Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <text
        className="fill-current text-white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={19}
        letterSpacing="0em"
      >
        <tspan x="73.1084" y="299.555">
          {" "}
        </tspan>
      </text>
      <text
        className="fill-current text-white"
        fillOpacity="0.6"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={19}
        letterSpacing="0em"
      >
        <tspan x="77.3018" y="299.555">
          estimated taxes saved
        </tspan>
      </text>
      <text
        className="fill-current text-money-in-light"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={19}
        letterSpacing="0em"
      >
        <tspan x="36.5" y="299.555">
          $579
        </tspan>
      </text>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M252.5 289.667C255.446 289.667 257.833 292.054 257.833 295C257.833 297.946 255.446 300.333 252.5 300.333C249.554 300.333 247.167 297.946 247.167 295C247.167 292.054 249.554 289.667 252.5 289.667ZM252.5 289C249.186 289 246.5 291.686 246.5 295C246.5 298.314 249.186 301 252.5 301C255.814 301 258.5 298.314 258.5 295C258.5 291.686 255.814 289 252.5 289Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        d="M253.167 292.333C253.167 291.965 252.868 291.667 252.5 291.667C252.132 291.667 251.833 291.965 251.833 292.333C251.833 292.702 252.132 293 252.5 293C252.868 293 253.167 292.702 253.167 292.333Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M252.5 298.333C252.868 298.333 253.167 298.072 253.167 297.75L253.167 294.25C253.167 293.928 252.868 293.667 252.5 293.667C252.132 293.667 251.833 293.928 251.833 294.25L251.833 297.75C251.833 298.072 252.132 298.333 252.5 298.333Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <text
        className="fill-current text-white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={36}
        fontWeight="bold"
        letterSpacing="-0.03em"
      >
        <tspan x="35.5" y="201.92">
          $98,656.00
        </tspan>
      </text>
      <text
        className="fill-current text-white"
        fillOpacity="0.6"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibre"
        fontSize={15}
        letterSpacing="0em"
      >
        <tspan x="49.5" y="231.175">
          1.7% today
        </tspan>
      </text>
      <path
        d="M40.634 223.389C41.0189 222.722 41.9811 222.722 42.366 223.389L45.8301 229.389C46.215 230.056 45.7339 230.889 44.9641 230.889H38.0359C37.2661 230.889 36.785 230.056 37.1699 229.389L40.634 223.389Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        d="M67.5 156C85.1731 156 99.5 141.673 99.5 124C99.5 106.327 85.1731 92 67.5 92C49.8269 92 35.5 106.327 35.5 124C35.5 141.673 49.8269 156 67.5 156Z"
        className="fill-current text-blurple"
        fillOpacity="0.1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.2712 107.011L67.8372 107.511C67.515 107.222 67.0273 107.222 66.7051 107.511L67.2712 107.011ZM68.7098 125.23C68.5376 125.467 68.1198 125.351 68.1198 125.059V124.815C68.1198 124.514 68.2411 124.227 68.4471 124.007C68.4685 123.984 68.4902 123.961 68.5125 123.937C68.9046 123.514 69.4265 122.902 69.9494 122.145C70.9839 120.648 72.0798 118.497 72.0798 116.063C72.0798 113.629 70.9839 111.478 69.9494 109.98C69.4265 109.223 68.9046 108.612 68.5125 108.188C68.316 107.976 68.1511 107.81 68.0335 107.696C67.9747 107.639 67.9276 107.594 67.8943 107.563C67.8776 107.547 67.8644 107.535 67.8548 107.526L67.8432 107.516L67.8395 107.513L67.8382 107.511L67.8377 107.511L67.2712 107.011L66.7047 107.511L66.7042 107.511L66.7029 107.513L66.6992 107.516L66.6876 107.526C66.678 107.535 66.6647 107.547 66.6481 107.563C66.6147 107.594 66.5677 107.639 66.5088 107.696C66.3913 107.81 66.2264 107.976 66.0299 108.188C65.6378 108.612 65.1158 109.223 64.593 109.98C63.5584 111.478 62.4626 113.418 62.4626 115.852C62.4626 118.286 63.5584 120.648 64.593 122.145C65.1158 122.902 65.6378 123.514 66.0299 123.937C66.0521 123.961 66.0739 123.984 66.0953 124.007C66.3012 124.227 66.4226 124.514 66.4226 124.815V125.059C66.4226 125.351 66.0047 125.467 65.8326 125.23C65.598 124.907 65.3357 124.596 65.0426 124.303C63.462 122.722 61.3571 122.04 59.7222 121.741C58.8951 121.59 58.1628 121.532 57.6358 121.512C57.3717 121.502 57.1577 121.501 57.0073 121.503C56.932 121.504 56.8726 121.505 56.8306 121.507C56.8096 121.508 56.793 121.508 56.7809 121.509L56.7663 121.51L56.7616 121.51L56.76 121.51L56.7593 121.51C56.3274 121.534 55.982 121.879 55.9582 122.311L55.9581 122.312L55.958 122.313L55.9578 122.318L55.9571 122.333C55.9565 122.345 55.9558 122.361 55.9551 122.382C55.9536 122.424 55.952 122.484 55.951 122.559C55.9491 122.71 55.9498 122.924 55.9598 123.188C55.98 123.715 56.0378 124.447 56.1891 125.274C56.4882 126.909 57.1706 129.014 58.7511 130.594C60.3317 132.175 62.4366 132.857 64.0715 133.156C64.8986 133.308 65.631 133.366 66.158 133.386V133.386C66.3049 133.391 66.4226 133.511 66.4226 133.658V134.388C66.4226 134.939 65.9808 135.387 65.4309 135.415C58.4283 135.771 54.0882 138.114 52.2619 139.844C51.9216 140.166 51.9071 140.704 52.2294 141.044C52.5518 141.384 53.0888 141.398 53.4291 141.076C55.0306 139.559 59.5194 137.066 67.2712 137.066C75.023 137.066 79.5118 139.559 81.1133 141.076C81.4535 141.398 81.9906 141.384 82.3129 141.044C82.6352 140.704 82.6207 140.166 82.2805 139.844C80.4542 138.114 76.114 135.771 69.1115 135.415C68.5616 135.387 68.1198 134.939 68.1198 134.388V133.658C68.1198 133.511 68.2375 133.391 68.3843 133.386V133.386C68.9113 133.366 69.6437 133.308 70.4708 133.156C72.1057 132.857 74.2106 132.175 75.7912 130.594C77.3718 129.014 78.0542 126.909 78.3532 125.274C78.5045 124.447 78.5623 123.715 78.5825 123.188C78.5926 122.924 78.5933 122.709 78.5913 122.559C78.5904 122.484 78.5887 122.424 78.5872 122.382C78.5868 122.368 78.5863 122.356 78.5859 122.346C78.5856 122.341 78.5855 122.337 78.5853 122.333L78.5846 122.318L78.5843 122.313L78.5842 122.312L78.5842 122.311C78.5604 121.879 78.2155 121.534 77.7836 121.51L77.7824 121.51L77.7807 121.51L77.776 121.51L77.7614 121.509C77.7494 121.508 77.7327 121.508 77.7118 121.507C77.6698 121.505 77.6103 121.504 77.5351 121.503C77.3847 121.501 77.1707 121.502 76.9066 121.512C76.3796 121.532 75.6472 121.59 74.8201 121.741C73.1852 122.04 71.0803 122.722 69.4997 124.303C69.2066 124.596 68.9444 124.907 68.7098 125.23ZM70.1655 131.487C70.0238 131.513 69.9348 131.345 70.033 131.24L74.2161 126.756C74.4445 126.511 74.4378 126.13 74.2012 125.893V125.893C73.9645 125.656 73.5829 125.65 73.3381 125.878L68.8543 130.061C68.749 130.159 68.5812 130.07 68.6072 129.929V129.929C68.878 128.448 69.4685 126.734 70.6998 125.503C71.9311 124.272 73.6448 123.681 75.1255 123.41C75.3057 123.377 75.4809 123.349 75.6497 123.326C76.3086 123.233 76.8608 123.786 76.7684 124.444C76.7447 124.613 76.7167 124.789 76.6838 124.969C76.4129 126.449 75.8225 128.163 74.5911 129.394C73.3598 130.626 71.6462 131.216 70.1655 131.487V131.487ZM60.3492 125.903C60.58 125.662 60.9613 125.651 61.2051 125.879L65.688 130.061C65.7933 130.159 65.9611 130.07 65.9352 129.929V129.929C65.6644 128.448 65.0739 126.734 63.8426 125.503C62.6112 124.272 60.8976 123.681 59.4169 123.41C59.2367 123.377 59.0614 123.349 58.8926 123.326C58.2337 123.233 57.6815 123.786 57.774 124.444C57.7977 124.613 57.8256 124.789 57.8586 124.969C58.1294 126.449 58.7199 128.163 59.9512 129.394C61.1825 130.626 62.8962 131.216 64.3769 131.487V131.487C64.5191 131.513 64.6087 131.345 64.5104 131.239L60.3419 126.739C60.1225 126.502 60.1257 126.135 60.3492 125.903V125.903ZM68.0937 121.04C68.1025 121.288 68.412 121.385 68.553 121.181V121.181C69.4984 119.812 70.3826 118.003 70.3826 116.063C70.3826 114.123 69.4984 112.313 68.553 110.945C68.3878 110.706 68.2225 110.482 68.0623 110.277C67.6568 109.757 66.8856 109.757 66.48 110.277C66.3199 110.482 66.1546 110.706 65.9894 110.945C65.0439 112.313 64.1597 114.123 64.1597 116.063C64.1597 118.003 65.0439 119.812 65.9894 121.181V121.181C66.1303 121.385 66.4399 121.288 66.4487 121.04L66.6854 114.365C66.6966 114.05 66.9555 113.8 67.2712 113.8V113.8C67.5868 113.8 67.8458 114.05 67.8569 114.365L68.0937 121.04Z"
        className="fill-current text-blurple-light"
      />
      <mask
        id="ab15fdb054651ca13929716cfb267184"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={35}
        y={92}
        width={64}
        height={64}
      >
        <path
          d="M67 156C84.6731 156 99 141.673 99 124C99 106.327 84.6731 92 67 92C49.3269 92 35 106.327 35 124C35 141.673 49.3269 156 67 156Z"
          className="fill-current text-white"
        />
      </mask>
      <g mask="url(#ab15fdb054651ca13929716cfb267184)">
        <rect
          x={33}
          y={90}
          width={68}
          height={68}
          fill="url(#c737e5d91266f3028cbdc21a08fe4ed6)"
        />
      </g>
      <g clipPath="url(#d7193688909951d73cc6ad7db4bd41e0)">
        <path
          d="M11.0007 402.085L15.4203 420.553C16.1554 423.625 20.0266 424.624 22.1565 422.292V422.292C24.0498 420.219 27.4424 420.737 28.6308 423.28L36.345 439.792C37.3623 441.969 40.4564 441.975 41.4821 439.802L42.2621 438.149C43.0866 436.402 45.6268 436.575 46.2066 438.418V438.418C46.8412 440.435 49.7129 440.385 50.2772 438.347L55.3228 420.123C55.7074 418.733 56.6731 417.578 57.972 416.952L60.4593 415.754C61.21 415.393 61.8584 414.849 62.3456 414.174L65.3266 410.039C67.7151 406.726 72.8527 407.519 74.1311 411.398L74.4401 412.335C74.7056 413.141 75.1716 413.866 75.7943 414.441L76.1796 414.798C78.0958 416.57 81.0524 416.57 82.9686 414.798L83.7459 414.079C84.1154 413.737 84.4312 413.342 84.6826 412.906L86.9348 409.001C87.9872 407.177 90.4918 406.864 91.9609 408.373V408.373C92.7783 409.213 93.9919 409.534 95.1178 409.209L95.3439 409.143C97.3104 408.575 99.3507 409.774 99.8109 411.769L101.284 418.154C101.781 420.308 104.697 420.665 105.699 418.695V418.695C106.507 417.108 108.711 416.948 109.74 418.401L117.368 429.178C118.52 430.805 121.045 430.365 121.579 428.444V428.444C122.261 425.994 125.801 426.198 126.196 428.711L127.275 435.568C127.868 439.335 132.974 440.067 134.602 436.619L137.229 431.052C137.567 430.336 138.071 429.71 138.699 429.226L143.672 425.393C144.433 424.807 145.008 424.015 145.331 423.111L147.297 417.591C147.807 416.159 149.162 415.203 150.682 415.203V415.203C151.491 415.203 152.276 414.93 152.911 414.429L160.227 408.643C160.683 408.282 161.073 407.844 161.379 407.35L165.08 401.36C165.453 400.757 165.95 400.24 166.538 399.843L169.383 397.925C170.611 397.097 172.143 396.856 173.566 397.267L174.904 397.654C177.214 398.322 179.672 397.25 180.756 395.103L181.33 393.966C181.888 392.859 182.839 391.999 183.996 391.553L185.754 390.876C187.745 390.108 189.991 391.015 190.893 392.95V392.95C191.838 394.978 194.245 395.859 196.276 394.92L201.062 392.707C201.72 392.403 202.436 392.246 203.16 392.246H207.347C209.763 392.246 211.833 390.518 212.266 388.142L212.982 384.214C213.253 382.725 214.183 381.44 215.512 380.717L219.748 378.413C220.843 377.818 221.676 376.834 222.084 375.656L223.123 372.653C223.82 370.639 225.717 369.288 227.848 369.288H228.39C229.115 369.288 229.83 369.131 230.488 368.827L235.748 366.395C237.667 365.508 239.936 365.923 241.417 367.433L246.347 372.461C246.771 372.893 247.269 373.245 247.819 373.499L255.174 376.899C255.985 377.274 256.603 377.971 256.879 378.821L256.941 379.011C257.802 381.666 261.447 381.947 262.705 379.455L263.384 378.11C264.349 376.197 267.127 376.344 267.886 378.348V378.348C268.513 380.006 270.636 380.478 271.907 379.241L278.201 373.114L284.231 367.612C285.85 366.134 288.369 366.283 289.804 367.941V367.941C290.544 368.797 291.62 369.288 292.751 369.288H293.133C294.985 369.288 296.666 368.209 297.437 366.526L298.239 364.775C299.43 362.175 302.555 361.102 305.092 362.422L306.419 363.112C308.425 364.155 310.89 363.609 312.269 361.817V361.817C313.152 360.669 314.518 359.996 315.967 359.996H316.527C318.971 359.996 321.058 358.228 321.459 355.816L322.93 346.973C323.06 346.192 323.374 345.452 323.846 344.815L327.806 339.477C328.433 338.63 329.424 338.131 330.478 338.131V338.131C331.765 338.131 332.937 338.874 333.486 340.038L333.812 340.727C334.745 342.706 336.96 343.734 339.074 343.17L339.413 343.08C340.786 342.714 341.935 341.776 342.568 340.505L349.861 325.864C350.314 324.954 351.035 324.203 351.926 323.713L354.346 322.381C357.355 320.725 361.099 322.525 361.684 325.908L363.479 336.279C363.685 337.473 364.318 338.552 365.26 339.314L371.882 344.671C372.772 345.391 373.882 345.784 375.027 345.784H386.499"
          className="stroke-current text-blurple-light"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="578.785 0 0 578.785"
        />
        <path
          d="M15.7862 424.116L14.4448 418.525C13.8919 416.221 10.5 416.622 10.5 418.992V446C10.5 447.105 11.3954 448 12.5 448H385C386.105 448 387 447.105 387 446V347.784C387 346.679 386.105 345.784 385 345.784H374.429C373.972 345.784 373.529 345.627 373.173 345.34L364.798 338.582C364.437 338.291 364.188 337.883 364.095 337.429L361.249 323.597C361.057 322.667 360.239 322 359.29 322H356.194C355.873 322 355.556 322.077 355.271 322.226L351.539 324.166C351.164 324.361 350.861 324.67 350.672 325.047L342.356 341.697C342.1 342.21 341.635 342.589 341.081 342.736L337.398 343.716C336.465 343.964 335.489 343.511 335.076 342.639L333.485 339.276C333.154 338.577 332.45 338.131 331.677 338.131H330.155C329.523 338.131 328.927 338.43 328.55 338.938L323.748 345.396C323.559 345.651 323.432 345.947 323.38 346.26L321.368 358.325C321.207 359.289 320.372 359.996 319.395 359.996H314.959C314.339 359.996 313.754 360.283 313.376 360.774L311.203 363.591C310.613 364.358 309.558 364.591 308.699 364.145L302.562 360.962C301.548 360.436 300.3 360.865 299.823 361.903L296.967 368.123C296.64 368.833 295.931 369.288 295.149 369.288H292.128C291.548 369.288 290.997 369.037 290.617 368.599L288.764 366.462C288.028 365.614 286.738 365.538 285.907 366.294L278.412 373.114L271.586 379.741C270.554 380.743 268.834 380.36 268.323 379.015L267.692 377.352C267.075 375.727 264.822 375.607 264.037 377.158L261.633 381.91C260.827 383.502 258.498 383.322 257.946 381.626L256.871 378.319C256.698 377.789 256.312 377.355 255.806 377.121L247.449 373.268C247.229 373.166 247.03 373.026 246.86 372.854L240.042 365.918C239.45 365.317 238.544 365.151 237.778 365.504L229.97 369.104C229.708 369.225 229.422 369.288 229.133 369.288H225.779C224.927 369.288 224.169 369.828 223.889 370.632L221.765 376.755C221.601 377.226 221.268 377.619 220.829 377.857L214.291 381.404C213.759 381.692 213.386 382.207 213.278 382.802L211.853 390.605C211.679 391.555 210.851 392.246 209.885 392.246H202.508C202.219 392.246 201.933 392.308 201.671 392.43L194.393 395.785C193.393 396.246 192.209 395.813 191.743 394.816L190.055 391.202C189.611 390.25 188.506 389.805 187.526 390.181L182.873 391.969C182.41 392.147 182.03 392.491 181.806 392.933L179.582 397.328C179.148 398.185 178.167 398.613 177.244 398.347L172.144 396.877C171.576 396.713 170.964 396.809 170.474 397.139L165.915 400.205C165.679 400.363 165.48 400.57 165.331 400.811L161.001 407.798C160.878 407.996 160.722 408.171 160.539 408.315L152.351 414.774C151.998 415.052 151.562 415.203 151.112 415.203H149.422C148.577 415.203 147.823 415.735 147.538 416.531L144.891 423.941C144.762 424.303 144.531 424.62 144.227 424.854L137.963 429.668C137.712 429.861 137.51 430.111 137.374 430.398L131.819 442.139C130.977 443.918 128.342 443.539 128.035 441.595L125.736 427.019C125.401 424.896 122.411 424.723 121.834 426.793L121.163 429.198C120.711 430.819 118.58 431.191 117.606 429.818L109.144 417.896C108.275 416.671 106.415 416.806 105.732 418.145L104.985 419.609C104.137 421.271 101.675 420.969 101.255 419.151L99.1732 410.153C98.9148 409.036 97.7723 408.364 96.6708 408.682L94.1571 409.406C93.4492 409.61 92.6865 409.408 92.172 408.881L90.5821 407.252C89.657 406.304 88.0826 406.501 87.4195 407.648L84.1502 413.301C84.0494 413.475 83.9228 413.633 83.7748 413.77L80.6122 416.686C79.8462 417.392 78.6664 417.392 77.9004 416.686L74.8951 413.915C74.6455 413.684 74.4586 413.394 74.352 413.072L71.9487 405.8C71.4367 404.25 69.3848 403.933 68.4289 405.255L61.5348 414.792C61.3396 415.062 61.0801 415.279 60.7799 415.423L56.3656 417.543C55.8456 417.793 55.4587 418.255 55.3044 418.811L49.765 438.766C49.2325 440.684 46.5295 440.731 45.9306 438.832L45.701 438.105C45.1539 436.37 42.7636 436.207 41.9858 437.851L40.2936 441.427C39.57 442.956 37.3924 442.952 36.6747 441.42L26.9416 420.643C26.3375 419.353 24.6172 419.09 23.6555 420.141L19.206 425C18.1237 426.182 16.1602 425.674 15.7862 424.116Z"
          fill="url(#9e6cd7dffd1478a43d8811c47c4e72d2)"
          fillOpacity="0.1"
          opacity={1}
        />
        <path
          d="M10.5 431H64.2562V419.104H173.887V410.452H227.908V393.148H304.967V379.089H348.925V358H385.999"
          className="stroke-current text-blurple-light"
          strokeWidth="1.5"
          strokeDasharray="1.58 1.58"
        />
      </g>
      <g
        clipPath="url(#d676c6e54a87447d5f32e6be842cbe87)"
        opacity={1}
        transform-origin="204.4769515991211px 483px"
        style={{ transform: "none", transformOrigin: "204.477px 483px" }}
      >
        <text
          className="fill-current text-white"
          fillOpacity="0.6"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={12}
          letterSpacing="0.05em"
        >
          <tspan x="53.8758" y="487.14">
            3M
          </tspan>
        </text>
        <text
          className="fill-current text-white"
          fillOpacity="0.6"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={12}
          letterSpacing="0.05em"
        >
          <tspan x="108.659" y="487.14">
            6M
          </tspan>
        </text>
        <text
          className="fill-current text-white"
          fillOpacity="0.6"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={12}
          letterSpacing="0.05em"
        >
          <tspan x="165.575" y="487.14">
            1Y
          </tspan>
        </text>
        <text
          className="fill-current text-white"
          fillOpacity="0.6"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={12}
          letterSpacing="0.05em"
        >
          <tspan x="219.802" y="487.14">
            3Y
          </tspan>
        </text>
        <text
          className="fill-current text-white"
          fillOpacity="0.6"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={12}
          letterSpacing="0.05em"
        >
          <tspan x="274.725" y="487.14">
            5Y
          </tspan>
        </text>
        <rect
          x="315.5"
          y={471}
          width={41}
          height={24}
          rx={12}
          className="fill-current text-blurple-light"
          fillOpacity="0.2"
        />
        <text
          className="fill-current text-blurple-light"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={12}
          letterSpacing="0.05em"
        >
          <tspan x="325.556" y="487.14">
            ALL
          </tspan>
        </text>
      </g>
      <g
        opacity={1}
        // eslint-disable-next-line react/no-unknown-property
        transform-origin="181.25px 326.7203369140625px"
        style={{ transform: "none", transformOrigin: "181.25px 326.72px" }}
      >
        <path
          d="M35.5 540C35.5 532.545 35.5 528.817 36.7179 525.877C38.3418 521.957 41.4566 518.842 45.3771 517.218C48.3174 516 52.0449 516 59.5 516H338.5C345.955 516 349.683 516 352.623 517.218C356.543 518.842 359.658 521.957 361.282 525.877C362.5 528.817 362.5 532.545 362.5 540V540C362.5 547.455 362.5 551.183 361.282 554.123C359.658 558.043 356.543 561.158 352.623 562.782C349.683 564 345.955 564 338.5 564H59.5C52.0449 564 48.3174 564 45.3771 562.782C41.4566 561.158 38.3418 558.043 36.7179 554.123C35.5 551.183 35.5 547.455 35.5 540V540Z"
          className="fill-current text-blurple-light"
          fillOpacity="0.2"
        />
        <text
          className="fill-current text-blurple-light"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={19}
          letterSpacing="0em"
        >
          <tspan x="140.284" y="546.555">
            Transfer money
          </tspan>
        </text>
        <text
          className="fill-current text-white"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={19}
          letterSpacing="0em"
        >
          <tspan x={35} y="604.555" className='section-paragraph'>
            US Stocks
          </tspan>
        </text>
        <text
          className="fill-current text-white"
          fillOpacity="0.6"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={15}
          letterSpacing="0em"
        >
          <tspan x={35} y="629.175">
            44% current
          </tspan>
          <tspan x={35} y="649.175">
            44% target
          </tspan>
        </text>
        <text
          className="fill-current text-white"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={19}
          letterSpacing="0em"
        >
          <tspan x="285.516" y="604.555">
            $33,829.32
          </tspan>
        </text>
        <text
          className="fill-current text-money-in-light"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Calibre"
          fontSize={15}
          letterSpacing="0em"
        >
          <tspan x="322.512" y="629.175">
            36.63%
          </tspan>
        </text>
        <path
          d="M312.134 621.5C312.519 620.833 313.481 620.833 313.866 621.5L317.33 627.5C317.715 628.167 317.234 629 316.464 629H309.536C308.766 629 308.285 628.167 308.67 627.5L312.134 621.5Z"
          className="fill-current text-money-in-light"
        />
        <rect
          x={116}
          y={625}
          width={102}
          height={3}
          rx="1.5"
          className="fill-current text-blurple-light"
        />
        <rect
          x={116}
          y={646}
          width={95}
          height={3}
          rx="1.5"
          className="fill-current text-white"
          fillOpacity="0.3"
        />
      </g>
    </g>
    <g
      filter="url(#8a61a1bc1158066f1a1d795ba762b3de)"
      opacity={1}
      // eslint-disable-next-line react/no-unknown-property
      transform-origin="199px 713.5px"
      style={{ transform: "none", transformOrigin: "199px 713.5px" }}
    >
      <path
        d="M11 679H387V725.5C387 737.926 376.926 748 364.5 748H33.5C21.0736 748 11 737.926 11 725.5V679Z"
        className="fill-current text-[#2F2E40]"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M349.3 700.191C352.514 700.191 355.113 702.79 355.113 706.004V706.811C355.113 706.813 355.113 706.815 355.113 706.817C355.113 706.822 355.113 706.827 355.113 706.832V707.224C355.113 708.169 354.886 709.069 354.473 709.869C354.309 710.188 354.42 710.592 354.732 710.768C357.212 712.167 358.54 714.507 358.54 716.809C358.54 717.588 358.112 718.312 357.594 718.899C357.057 719.508 356.32 720.087 355.476 720.589C353.792 721.59 351.552 722.358 349.312 722.389L349.3 722.389C347.059 722.389 344.818 721.653 343.131 720.674C342.286 720.183 341.548 719.613 341.009 719.009C340.49 718.427 340.06 717.706 340.06 716.925C340.06 716.918 340.06 716.911 340.06 716.904C340.116 714.574 341.404 712.221 343.887 710.786C344.195 710.607 344.302 710.206 344.138 709.89C343.718 709.084 343.487 708.177 343.487 707.224V706.004C343.487 702.79 346.086 700.191 349.3 700.191ZM347.083 712.202C346.427 711.938 345.69 711.792 345.055 712.106C342.835 713.201 341.81 715.115 341.81 716.809C341.81 716.96 341.912 717.281 342.318 717.741C342.705 718.18 343.286 718.65 344.018 719.085C345.483 719.956 347.424 720.611 349.306 720.639C351.188 720.638 353.127 720.01 354.59 719.16C355.321 718.736 355.9 718.275 356.285 717.844C356.683 717.398 356.787 717.085 356.79 716.933C356.79 716.47 356.766 716.066 356.722 715.713C356.368 712.885 352.15 712.63 349.3 712.63C348.522 712.63 347.769 712.478 347.083 712.202ZM353.363 706.811V706.004C353.363 703.757 351.547 701.941 349.3 701.941C347.053 701.941 345.237 703.757 345.237 706.004V706.83C345.244 709.071 347.057 710.88 349.3 710.88C351.547 710.88 353.363 709.064 353.363 706.817C353.363 706.815 353.363 706.813 353.363 706.811Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M284.456 701.205C284.586 700.703 284.044 700.294 283.596 700.557L263.781 712.189C262.957 712.672 263.031 713.886 263.907 714.265L268.172 716.113C268.505 716.257 268.752 716.548 268.84 716.9L269.876 721.045C269.986 721.485 270.534 721.637 270.854 721.316L273.113 719.058C273.451 718.719 273.962 718.622 274.402 718.812L278.106 720.417C278.763 720.702 279.52 720.332 279.699 719.638L284.456 701.205ZM272.277 714.206C271.663 714.78 271.839 715.795 272.61 716.129L275.67 717.455C276.986 718.025 278.499 717.285 278.857 715.897L281.149 707.017C281.258 706.593 280.746 706.289 280.427 706.588L272.277 714.206ZM278.736 705.773C278.863 705.654 278.712 705.452 278.562 705.541L266.648 712.535C266.236 712.776 266.273 713.383 266.711 713.573L268.524 714.358C268.95 714.543 269.445 714.457 269.785 714.14L278.736 705.773Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M130.488 718.526C129.636 717.674 128.287 717.643 127.21 718.182C125.953 718.812 124.535 719.167 123.033 719.167C117.879 719.167 113.7 714.988 113.7 709.833C113.7 704.679 117.879 700.5 123.033 700.5C128.188 700.5 132.367 704.679 132.367 709.833C132.367 711.335 132.012 712.753 131.382 714.01C130.843 715.087 130.874 716.436 131.726 717.288L134.117 719.679C134.458 720.021 134.458 720.575 134.117 720.917V720.917C133.775 721.258 133.221 721.258 132.879 720.917L130.488 718.526ZM130.617 709.833C130.617 705.645 127.222 702.25 123.033 702.25C118.845 702.25 115.45 705.645 115.45 709.833C115.45 714.021 118.845 717.417 123.033 717.417C127.222 717.417 130.617 714.021 130.617 709.833Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        d="M196.207 700.847C196.559 700.516 196.577 699.962 196.247 699.61C195.916 699.257 195.362 699.239 195.01 699.57L190.343 703.945C190.167 704.11 190.067 704.341 190.067 704.583C190.067 704.825 190.167 705.056 190.343 705.222L195.01 709.597C195.362 709.927 195.916 709.909 196.247 709.557C196.577 709.204 196.559 708.65 196.207 708.32L195.307 707.476C194.535 706.753 195.047 705.458 196.105 705.458H205.525C206.008 705.458 206.4 705.067 206.4 704.583C206.4 704.1 206.008 703.708 205.525 703.708H196.105C195.047 703.708 194.535 702.414 195.307 701.691L196.207 700.847Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        d="M191.817 716.833C191.817 716.35 192.208 715.958 192.692 715.958H202.112C203.17 715.958 203.682 714.664 202.91 713.941L202.01 713.097C201.657 712.766 201.64 712.212 201.97 711.86C202.301 711.507 202.854 711.489 203.207 711.82L207.873 716.195C208.05 716.36 208.15 716.591 208.15 716.833C208.15 717.075 208.05 717.306 207.873 717.472L203.207 721.847C202.854 722.177 202.301 722.159 201.97 721.807C201.64 721.454 201.657 720.9 202.01 720.57L202.91 719.726C203.682 719.003 203.17 717.708 202.112 717.708H192.692C192.208 717.708 191.817 717.317 191.817 716.833Z"
        className="fill-current text-white"
        fillOpacity="0.6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58.3333 721.5C58.9777 721.5 59.5 720.978 59.5 720.333V708.91C59.5 708.57 59.352 708.248 59.0946 708.026L49.7613 699.989C49.3237 699.612 48.6763 699.612 48.2387 699.989L38.9054 708.026C38.648 708.248 38.5 708.57 38.5 708.91V720.333C38.5 720.978 39.0223 721.5 39.6667 721.5H58.3333ZM48.2387 702.298C48.6763 701.922 49.3237 701.922 49.7613 702.298L57.3446 708.828C57.602 709.05 57.75 709.373 57.75 709.712V717.417C57.75 718.705 56.7053 719.75 55.4167 719.75H53.6667C53.0223 719.75 52.5 719.228 52.5 718.583V713.333C52.5 712.689 51.9777 712.167 51.3333 712.167H46.6667C46.0223 712.167 45.5 712.689 45.5 713.333V718.583C45.5 719.228 44.9777 719.75 44.3333 719.75H41.4167C40.7723 719.75 40.25 719.228 40.25 718.583V709.712C40.25 709.373 40.398 709.05 40.6554 708.828L48.2387 702.298ZM47.25 715.083C47.25 714.439 47.7723 713.917 48.4167 713.917H49.5833C50.2277 713.917 50.75 714.439 50.75 715.083V718.583C50.75 719.228 50.2277 719.75 49.5833 719.75H48.4167C47.7723 719.75 47.25 719.228 47.25 718.583V715.083Z"
        className="fill-current text-blurple-light"
      />
    </g>
  </g>
  <defs>
    <pattern
      id="c737e5d91266f3028cbdc21a08fe4ed6"
      patternContentUnits="objectBoundingBox"
      width={1}
      height={1}
    >
      <use
        xlinkHref="#25914ba44a97133e22ba2464a441a139"
        transform="scale(0.005)"
      />
    </pattern>
    <filter
      id="8a61a1bc1158066f1a1d795ba762b3de"
      x="-16.1828"
      y="651.817"
      width="430.366"
      height="123.366"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="-0.465721" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_944_55320"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy={4} />
      <feGaussianBlur stdDeviation={2} />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="effect1_dropShadow_944_55320"
        result="effect2_dropShadow_944_55320"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect2_dropShadow_944_55320"
        result="shape"
      />
    </filter>
    <linearGradient
      id="9e6cd7dffd1478a43d8811c47c4e72d2"
      x1="198.75"
      y1={319}
      x2="198.75"
      y2={448}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="currentColor" className="text-blurple" />
      <stop
        offset={1}
        stopColor="currentColor"
        className="text-blurple"
        stopOpacity={0}
      />
    </linearGradient>
    <clipPath id="7a2ddd64b03adfa074b2bac43b4fa324">
      <rect width="397.5" height="759.5" className="fill-current text-white" />
    </clipPath>
    <clipPath id="f94b317f95733a8e0373b16cf9414759">
      <rect
        x={11}
        y={11}
        width={376}
        height={737}
        rx="22.5"
        className="fill-current text-white"
      />
    </clipPath>
    <clipPath id="d7193688909951d73cc6ad7db4bd41e0">
      <rect
        width={376}
        height={142}
        className="fill-current text-white"
        transform="translate(11 319)"
      />
    </clipPath>
    <clipPath id="d676c6e54a87447d5f32e6be842cbe87">
      <rect
        width={375}
        height={45}
        className="fill-current text-white"
        transform="translate(11.5 461)"
      />
    </clipPath>
    <image
      id="e317ba06fae500122784155892ef5438"
      width={200}
      height={200}
      href="/next/contenthash/next/optimized/portfolio-icon-sri.contenthash.3151cd8d9142d4ca9f42bb3b4d7a51a369fe8ffa.png"
    />
    <image
      id="25914ba44a97133e22ba2464a441a139"
      width={200}
      height={200}
      href="/next/contenthash/next/optimized/portfolio-icon-core.contenthash.ab3ae2470854eb5eb618d2f262727bcb2e6fc19c.png"
    />
  </defs>
</svg>

            <div className="hero-app-dots hero-app-dots-2">
              <svg width={124} height={75} xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#556B8B"
                    d="M33.392 0l3.624 1.667.984 3.53-1.158 3.36L33.392 10l-3.249-1.639L28 5.196l1.62-3.674zM74.696 3l1.812.833L77 5.598l-.579 1.68L74.696 8l-1.624-.82L72 5.599l.81-1.837zM40.696 70l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L38 72.599l.81-1.837zM4.314 37l2.899 1.334L8 41.157l-.926 2.688L4.314 45l-2.6-1.31L0 41.156l1.295-2.94zM49.314 32l2.899 1.334.787 2.823-.926 2.688L49.314 40l-2.6-1.31L45 36.156l1.295-2.94z"
                  />
                  <path
                    fill="#FFF"
                    d="M99.696 56l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L97 58.599l.81-1.837z"
                  />
                  <path
                    fill="#556B8B"
                    d="M112.696 37l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L110 39.599l.81-1.837z"
                  />
                  <path
                    fill="#FFF"
                    d="M82.696 37l1.812.833.492 1.765-.579 1.68-1.725.722-1.624-.82L80 39.599l.81-1.837z"
                  />
                  <path
                    fill="#556B8B"
                    d="M122.618 57l1.087.5.295 1.059-.347 1.008-1.035.433-.975-.492-.643-.95.486-1.101z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="features section">
      <div className="container">
        <div className="features-inner section-inner has-bottom-divider">
          <h2 className="section-title mt-0">FAQs</h2>
          <div className="features-wrap">
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <svg
                    width={64}
                    height={64}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="0%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-1-a"
                      >
                        <stop
                          stopColor="#F9425F"
                          stopOpacity=".8"
                          offset="0%"
                        />
                        <stop
                          stopColor="#47A1F9"
                          stopOpacity=".16"
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-1-b"
                      >
                        <stop stopColor="#FDFFDA" offset="0%" />
                        <stop
                          stopColor="#F97059"
                          stopOpacity=".798"
                          offset="49.935%"
                        />
                        <stop
                          stopColor="#F9425F"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M24 48H0V24C0 10.745 10.745 0 24 0h24v24c0 13.255-10.745 24-24 24"
                        fill="url(#feature-1-a)"
                      />
                      <path
                        d="M40 64H16V40c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24"
                        fill="url(#feature-1-b)"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="feature-title mt-24">This sounds complicated. I bet this is complicated, right?</h3>
                <p className="text-sm mb-0">
                What we do is complicated. What you do is really really not. Just answer a few questions, and we’ll build an investment portfolio with your name on it. Then, as soon as your money arrives, we invest it just like we said we would. Bada bing, etc.
                </p>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <svg
                    width={68}
                    height={64}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="0%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-2-a"
                      >
                        <stop
                          stopColor="#F9425F"
                          stopOpacity=".8"
                          offset="0%"
                        />
                        <stop
                          stopColor="#47A1F9"
                          stopOpacity=".16"
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-2-b"
                      >
                        <stop stopColor="#FDFFDA" offset="0%" />
                        <stop
                          stopColor="#F97059"
                          stopOpacity=".798"
                          offset="49.935%"
                        />
                        <stop
                          stopColor="#F9425F"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M9.941 63.941v-24c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24h-24z"
                        fill="url(#feature-2-a)"
                        transform="rotate(45 33.941 39.941)"
                      />
                      <path
                        d="M16 0v24c0 13.255 10.745 24 24 24h24V24C64 10.745 53.255 0 40 0H16z"
                        fill="url(#feature-2-b)"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="feature-title mt-24">I bet this is really expensive.</h3>
                <p className="text-sm mb-0">
                That’s not a question, but actually no. The weighted average annual expense ratio of the investments of a taxable Wealthfront portfolio is between 0.05–0.29%. Wealthfront also charges a 0.25% annual advisory fee, but for more than 96% of our clients with a recommended portfolio, that’s covered by Tax-Loss Harvesting.
                </p>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <svg
                    width={64}
                    height={64}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        y1="100%"
                        x2="50%"
                        y2="43.901%"
                        id="feature-3-a"
                      >
                        <stop
                          stopColor="#F97059"
                          stopOpacity=".798"
                          offset="0%"
                        />
                        <stop
                          stopColor="#F9425F"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="58.893%"
                        y1="100%"
                        x2="58.893%"
                        y2="18.531%"
                        id="feature-3-b"
                      >
                        <stop
                          stopColor="#F9425F"
                          stopOpacity=".8"
                          offset="0%"
                        />
                        <stop
                          stopColor="#47A1F9"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-3-c"
                      >
                        <stop stopColor="#FDFFDA" offset="0%" />
                        <stop
                          stopColor="#F97059"
                          stopOpacity=".798"
                          offset="49.935%"
                        />
                        <stop
                          stopColor="#F9425F"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path
                        fill="url(#feature-3-a)"
                        opacity=".32"
                        d="M0 24h64v40H0z"
                      />
                      <path fill="url(#feature-3-b)" d="M40 24H24L0 64h64z" />
                      <path
                        d="M10 10v22c0 12.15 9.85 22 22 22h22V32c0-12.15-9.85-22-22-22H10z"
                        fill="url(#feature-3-c)"
                        transform="rotate(45 32 32)"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="feature-title mt-24">But I’ve already got investments somewhere else.</h3>
                <p className="text-sm mb-0">
                Again, that’s not a question. But you don’t always need to sell your investments to move them. We make the transfer process free, simple, and tax-efficient.
                <a>Learn more...</a>
                </p>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <svg
                    width={64}
                    height={64}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="0%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-4-a"
                      >
                        <stop
                          stopColor="#F9425F"
                          stopOpacity=".8"
                          offset="0%"
                        />
                        <stop
                          stopColor="#47A1F9"
                          stopOpacity=".16"
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-4-b"
                      >
                        <stop stopColor="#FDFFDA" offset="0%" />
                        <stop
                          stopColor="#F97059"
                          stopOpacity=".798"
                          offset="49.935%"
                        />
                        <stop
                          stopColor="#F9425F"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M24 64H0V40c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24"
                        fill="url(#feature-4-a)"
                        transform="matrix(-1 0 0 1 48 0)"
                      />
                      <path
                        d="M40 48H16V24C16 10.745 26.745 0 40 0h24v24c0 13.255-10.745 24-24 24"
                        fill="url(#feature-4-b)"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="feature-title mt-24">What if I don’t like your picks? Can I choose my own investments?</h3>
                <p className="text-sm mb-0">
                Yup. You can customize your Wealthfront portfolio six ways to Sunday, both when you’re first opening a new account or at any point afterwards.
                </p>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <svg
                    width={64}
                    height={64}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="0%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-5-a"
                      >
                        <stop
                          stopColor="#F9425F"
                          stopOpacity=".8"
                          offset="0%"
                        />
                        <stop
                          stopColor="#47A1F9"
                          stopOpacity=".16"
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-5-b"
                      >
                        <stop stopColor="#FDFFDA" offset="0%" />
                        <stop
                          stopColor="#F97059"
                          stopOpacity=".798"
                          offset="49.935%"
                        />
                        <stop
                          stopColor="#F9425F"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M24 63H0V39c0-13.255 10.745-24 24-24h24v24c0 13.255-10.745 24-24 24"
                        fill="url(#feature-5-a)"
                        transform="matrix(-1 0 0 1 48 0)"
                      />
                      <path
                        d="M40 48H16V24C16 10.745 26.745 0 40 0h24v24c0 13.255-10.745 24-24 24"
                        fillOpacity=".24"
                        fill="url(#feature-5-a)"
                        transform="matrix(-1 0 0 1 80 0)"
                      />
                      <path
                        d="M10.113 10.113v22c0 12.15 9.85 22 22 22h22v-22c0-12.15-9.85-22-22-22h-22z"
                        fill="url(#feature-5-b)"
                        transform="rotate(45 32.113 32.113)"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="feature-title mt-24">Tax-loss what now?</h3>
                <p className="text-sm mb-0">
                    Tax-Loss Harvesting. 
                    It’s a way to take advantage of 
                    changes in the market to help reduce 
                    your tax bill and give you more money to invest. For most clients, it generates savings worth at least 11 times our advisory fee, which means your tax savings more than pay for our fee.
                </p>
              </div>
            </div>
            <div className="feature is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <svg
                    width={64}
                    height={64}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        y1="100%"
                        x2="50%"
                        y2="0%"
                        id="feature-6-a"
                      >
                        <stop stopColor="#FDFFDA" offset="0%" />
                        <stop
                          stopColor="#F97059"
                          stopOpacity=".798"
                          offset="49.935%"
                        />
                        <stop
                          stopColor="#F9425F"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </linearGradient>
                      <linearGradient
                        x1="58.893%"
                        y1="100%"
                        x2="58.893%"
                        y2="18.531%"
                        id="feature-6-b"
                      >
                        <stop
                          stopColor="#F9425F"
                          stopOpacity=".8"
                          offset="0%"
                        />
                        <stop
                          stopColor="#47A1F9"
                          stopOpacity={0}
                          offset="100%"
                        />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <path
                        d="M24 48H0V24C0 10.745 10.745 0 24 0h24v24c0 13.255-10.745 24-24 24"
                        fill="url(#feature-6-a)"
                      />
                      <path
                        fillOpacity=".64"
                        fill="url(#feature-6-b)"
                        d="M24 29.229h40V64H0z"
                      />
                    </g>
                  </svg>
                </div>
                <h3 className="feature-title mt-24">How is this different than investing in the S&P 500?</h3>
                <p className="text-sm mb-0">
                Investing in the S&P means only investing in US equities. Fortunately for us, the world is bigger than that. We use 10 global asset classes to diversify your investment and better weather anything the market throws at you.
                  <a>Learn more...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="media section">
      <div className="container-sm">
        <div className="media-inner section-inner">
          <div className="media-header text-center">
            <h2 className="section-title mt-0">Our not-so-secret ingredient? Automation✨</h2>
            <p className="section-paragraph mb-0">
            Keep your eyes on the big picture, your other investments, or basically anything besides the busywork. We rebalance your portfolio, automatically diversify deposits, and can help save you taxes, all without you ever lifting a finger.
            </p>
          </div>
          <div className="media-canvas bg-gray-900" >
          
              <video
                width={800}
                height={450}
                autoPlay
                loop
                muted
                
              >
                <source src="../src/assets/vanlife.contenthash.d137accbf403b4f762924ae4741bd24cccdcad64.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            
             {/* <!-- Notification 1 --> */}
             
          <div className="absolute left-auto right-0 top-1/2 flex w-72 origin-top-right -translate-x-4 -translate-y-1/2 scale-75 transform flex-col items-end xs:scale-100 sm:left-1/2 sm:translate-x-0 sm:items-start lg:left-full lg:-translate-x-3/4 xl:left-[calc(100%-8rem)] xl:-translate-x-1/4 2xl:left-[calc(100%-8rem)] 3xl:left-[calc(100%-10rem)] z-50">
            <div className="filter-shadow w-auto space-y-2 rounded-xl bg-[rgba(255,255,255,0.85)] p-3 pb-5 leading-4 2xl:space-y-4 w-[288px] 2xl:w-[375px] 3xl:w-[420px]" style={{ transform: 'translate3d(0, 0, 0)' }}>
              <div className="text-indigo flex justify-between text-[12px] 2xl:text-[14px] 3xl:text-[17px]">
                <div className="uppercase">
                  <div className="flex items-center space-x-1">
                    <img className="" width="21" height="21" alt="" loading="eager" src={notif}/>
                    <span>Wealthfront</span>
                  </div>
                </div>
                <div>now</div>
              </div>
              <div className="text-[16px] leading-none lg:text-[18px] 2xl:text-[23px]">We saved you $78.11 on your taxes.</div>
            </div>
          </div>
          <div className="absolute left-auto right-0 top-2/1 flex w-72 origin-top-right -translate-x-4 -translate-y-1/2 scale-75 transform flex-col items-end xs:scale-100 sm:left-1/2 sm:translate-x-0 sm:items-start lg:left-full lg:-translate-x-3/4 xl:left-[calc(100%-8rem)] xl:-translate-x-1/4 2xl:left-[calc(100%-8rem)] 3xl:left-[calc(100%-10rem)] z-50">
            <div className="filter-shadow w-auto space-y-2 rounded-xl bg-[rgba(255,255,255,0.85)] p-3 pb-5 leading-4 2xl:space-y-4 w-[288px] 2xl:w-[375px] 3xl:w-[420px]" style={{ transform: 'translate3d(0, 0, 0)' }}>
              <div className="text-indigo flex justify-between text-[12px] 2xl:text-[14px] 3xl:text-[17px]">
                <div className="uppercase">
                  <div className="flex items-center space-x-1">
                    <img className="" width="21" height="21" alt="" loading="eager" src={notif}/>
                    <span>Wealthfront</span>
                  </div>
                </div>
                <div>now</div>
              </div>
              <div className="text-[16px] leading-none lg:text-[18px] 2xl:text-[23px]">We automatically invested your $500 deposit.</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    <section className="newsletter section">
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
  <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-4 sm:px-6 lg:px-8 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5 backdrop-blur-md bg-opacity-50">
    <p className="text-base sm:text-xl leading-6 text-white">
      <a href="#" className="px-4 sm:px-10 py-2  sm:py-3 text-lg sm:text-xl">
        What Level of risk suits you best?<span className="text-center copy-h2-alt inline-block align-middle ml-1">➳</span>
      </a>
    </p>
  </div>
</div>



      <div className="container-sm">
        <div className="newsletter-inner section-inner">
          <div className="newsletter-header text-center">
            <h2 className="section-title mt-0">Stay in the know</h2>
            <p className="section-paragraph">
            Tax Loss Harvesting benefits will vary. Wealthfront doesn’t provide tax advice.
            </p>
          </div>
          <div className="footer-form newsletter-form field field-grouped newsletter-header flex justify-center text-center">
          <div className="control ">
            <a className="button button-primary button-block button-shadow" href="#">
              Get Started
            </a>
          </div>
      </div>

      <div className="risk p-8 rounded-lg shadow-xl bg-opacity-90">
  <div className="mb-4">
    <h2 className="text-lg font-semibold text-white">Risk Score</h2>
    <input
      type="range"
      min={0}
      max={100}
      value={totalAllocation}
      onChange={(e) => handleTotalSliderChange(parseInt(e.target.value, 10))}
      className="w-full mt-2"
    />
    <p className="text-sm text-white">{totalAllocation}%</p>
  </div>

  {Object.entries({
    NigerianStocks: 18,
    ForeignStocks: 4,
    TechStocks: 2,
    EmergingStocks: 7,
    NigerianBonds: 35,
    ForeignBonds: 15,
    Commodities: 7,
    RealEstate: 12,
    Tbills: 0,
    Alternative: 0,
  }).map(([investment, value]) => (
    <div key={investment} className="mb-4">
      <h3 className="text-md font-semibold text-gray-400">{investment}</h3>
      <input
        type="range"
        min={0}
        max={totalAllocation}
        value={calculateIndividualAllocation(value)}
        onChange={(e) =>
          handleTotalSliderChange((parseInt(e.target.value, 10) / 100) * totalAllocation)
        }
        className="w-full mt-2"
      />
      <p className="text-sm text-white">{calculateIndividualAllocation(value)}%</p>
    </div>
  ))}
</div>



        </div>
      </div>
    </section>
    
  </main>
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer-inner has-top-divider">
      <div className="mx-auto flex flex-col max-w-[2024px] divide-y divide-white px-8 lg:px-12">
                    <div className="flex flex-col justify-between gap-x-6 pb-8 md:flex-row md:pt-16">
                      <a className="z-10 relative font-medium underline text-eggplant" href="/">
                        <img
                          data-testid="logo-dark-wordmark"
                          className="text-3xl font-bold text-white"
                          width={200}
                          height={26}
                          alt="Wealthfront Logo"
                          loading="eager"
                          src={logo}
                        />
                      </a>
                      <nav
                        aria-label="Footer"
                        className="grid grid-cols-2 items-start gap-x-8 gap-y-8 py-8 sm:grid-cols-2 md:py-0 lg:gap-x-10 xl:grid-cols-4 xl:gap-x-14"
                      >
                        <div className="flex flex-col space-y-6">
                          <div className="flex flex-col space-y-2">
                            <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                              Investing
                            </h3>
                            <a className="group whitespace-nowrap text-white" href="/investing">
                              <div className="relative inline-block">
                                Automated Investing
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="/stock-investing"
                            >
                              <div className="relative inline-block">
                                Stock Investing
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/explore">
                              <div className="relative inline-block">
                                Explore all investments
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/retirement">
                              <div className="relative inline-block">
                                Retirement
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/college">
                              <div className="relative inline-block">
                                College
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="/socially-responsible-investing"
                            >
                              <div className="relative inline-block">
                                Socially Responsible
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/pricing">
                              <div className="relative inline-block">
                                Pricing
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="/tax-loss-harvesting"
                            >
                              <div className="relative inline-block">
                                Tax-loss Harvesting
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="/historical-performance"
                            >
                              <div className="relative inline-block">
                                Historical Performance
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/methodology">
                              <div className="relative inline-block">
                                Whitepapers
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                          <div className="flex flex-col space-y-2">
                            <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                              Save
                            </h3>
                            <a className="group whitespace-nowrap text-white" href="/cash">
                              <div className="relative inline-block">
                                Cash
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/find-atm">
                              <div className="relative inline-block">
                                ATM Locator
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                              Bonds
                            </h3>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="/automated-bond-portfolio"
                            >
                              <div className="relative inline-block">
                                Automated Bond Portfolio
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                              Borrow
                            </h3>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="/portfolio-line-of-credit"
                            >
                              <div className="relative inline-block">
                                Borrow
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                          <div className="flex flex-col space-y-2">
                            <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                              Learn
                            </h3>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="https://blog.wealthfront.com"
                            >
                              <div className="relative inline-block">
                                Blog
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="https://support.wealthfront.com/hc/en-us"
                            >
                              <div className="relative inline-block">
                                Help Center
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="/risk-questionnaire"
                            >
                              <div className="relative inline-block">
                                What level of risk suits you best?
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/home-guide">
                              <div className="relative inline-block">
                                Home Planning Guide
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="http://blog.wealthfront.com/financial-health"
                            >
                              <div className="relative inline-block">
                                Financial Health Guide
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="http://blog.wealthfront.com/equity-ipo-guide"
                            >
                              <div className="relative inline-block">
                                Equity and IPO Guide
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="/ira-calculator"
                            >
                              <div className="relative inline-block">
                                IRA Contributions Calculator
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                          <div className="flex flex-col space-y-2">
                            <h3 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-[22px] font-bold text-white">
                              About
                            </h3>
                            <a className="group whitespace-nowrap text-white" href="/origin">
                              <div className="relative inline-block">
                                About Us
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a
                              className="group whitespace-nowrap text-white"
                              href="https://press.wealthfront.com/"
                            >
                              <div className="relative inline-block">
                                Newsroom
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/reviews">
                              <div className="relative inline-block">
                                Reviews
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/careers">
                              <div className="relative inline-block">
                                Careers
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/legal">
                              <div className="relative inline-block">
                                Legal
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                            <a className="group whitespace-nowrap text-white" href="/sitemap">
                              <div className="relative inline-block">
                                Sitemap
                                <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                              </div>
                            </a>
                          </div>
                          <a className="group whitespace-nowrap text-white" href="#">
                            <div className="relative inline-block">
                              Back to top
                              <div className="absolute left-0 right-0 -bottom-0.5 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                            </div>
                          </a>
                        </div>
                      </nav>
                    </div>
  {/* <div className="prose-periwinkle prose max-w-full space-y-4 pt-8 pb-16 text-xs text-steel md:px-0 lg:px-0">
    <ol data-testid="investing-footnote">
      <li>
        Nerdwallet and Investopedia (the “Endorsers”) receive cash compensation
        for referring potential clients to Wealthfront Advisers, LLC
        (“Wealthfront Advisers”) via advertisements placed on their respective
        websites. The Endorsers and Wealthfront Advisers are not associated with
        one another and have no formal relationship outside of this arrangement.
        Nerdwallet’s opinions are their own. Their ratings are determined by
        their editorial team. The scoring formula for online brokers and
        robo-advisors takes into account over 15 factors, including account fees
        and minimums, investment choices, customer support and mobile app
        capabilities. Nerdwallet ranking as of January 2022. Wealthfront
        provides{" "}
        <button type="button" className="underline !m-0">
          cash compensation
        </button>{" "}
        in connection with obtaining this ranking. Investopedia designed a
        system that rates robo-advisors based on nine key categories and 49
        variables. Each category covers the critical elements users need to
        thoroughly evaluate a robo-advisor. Learn more about their{" "}
        <a
          href="https://www.investopedia.com/robo-advisor-ranking-methodology-4693455"
          target="_blank"
          rel="noreferrer"
        >
          methodology and review process
        </a>
        . Investopedia ranking as of January 2022. Wealthfront provided{" "}
        <button type="button" className="underline !m-0">
          cash compensation
        </button>{" "}
        in connection with obtaining this ranking. © 2017-2022 and TM,
        NerdWallet, Inc. All Rights Reserved.
      </li>
      <li>
        <p>
          Apple App Store and Google Play Store ratings based on user ratings
          from February 2014 (Apple) and December 2015 (Google) through Oct
          2023. Ratings compiled by Apple, Inc., and Google, Inc., who receive
          compensation for hosting our app.
        </p>
      </li>
    </ol>
    <p data-testid="termsandconditions">
      By using this website, you understand the information being presented is
      provided for informational purposes only and agree to our{" "}
      <a
        href="https://www.wealthfront.com/legal/terms"
        target="_blank"
        rel="noreferrer"
      >
        Terms of Use
      </a>{" "}
      and{" "}
      <a
        href="https://www.wealthfront.com/legal/privacy"
        target="_blank"
        rel="noreferrer"
      >
        Privacy Policy
      </a>
      . Wealthfront Advisers relies on information from various sources believed
      to be reliable, including clients and third parties, but cannot guarantee
      the accuracy and completeness of that information. Nothing in this
      communication should be construed as an offer, recommendation, or
      solicitation to buy or sell any security.Additionally, Wealthfront
      Advisers or its affiliates do not provide tax advice and investors are
      encouraged to consult with their personal tax advisors.
    </p>
    <p>
      We’ve partnered with Green Dot Bank, Member FDIC, to bring you checking
      features.
    </p>
    <p>
      Checking features for the Cash Account are subject to identity
      verification by Green Dot Bank. Debit Card is optional and must be
      requested. Wealthfront Cash Account Visa® Debit Card is issued by Green
      Dot Bank, Member FDIC, pursuant to a license from Visa U.S.A. Inc. Visa is
      a registered trademark of Visa International Service Association. Green
      Dot Bank operates under the following registered trade names: GO2bank,
      GoBank, Green Dot Bank and Bonneville Bank. All of these registered trade
      names are used by, and refer to, a single FDIC-insured bank, Green Dot
      Bank. Deposits under any of these trade names are deposits with Green Dot
      Bank and are aggregated for deposit insurance coverage. Wealthfront
      products and services are not provided by Green Dot Bank. Green Dot is a
      registered trademark of Green Dot Corporation. ©2024 Green Dot
      Corporation. All rights reserved.
    </p>
    <p>
      Cash Account is offered by Wealthfront Brokerage LLC (“Wealthfront
      Brokerage”), a member of <a href="https://www.finra.org/">FINRA</a> /{" "}
      <a href="https://www.sipc.org/">SIPC</a>. Neither Wealthfront Brokerage
      nor any of its affiliates are a bank, and Cash Account is not a checking
      or savings account. We convey funds to institutions accepting and
      maintaining deposits. Investment management and advisory services are
      provided by Wealthfront Advisers LLC (“Wealthfront Advisers”), an SEC
      registered investment adviser, and financial planning tools are provided
      by Wealthfront Software LLC (“Wealthfront”).
    </p>
    <p>
      The Wealthfront 529 College Savings Plan is administered by the Board of
      Trustees of the College Savings Plans of Nevada, chaired by the Nevada
      State Treasurer. Ascensus Broker Dealer Services, Inc. serves as the
      Program Manager. Wealthfront Advisers LLC, an SEC-registered investment
      adviser, serves as the investment adviser to the Plan. Wealthfront
      Brokerage LLC serves as the distributor and the underwriter of the Plan.
      Before you invest, consider whether your or the beneficiary’s home state
      offers any state tax or other state benefits such as financial aid,
      scholarship funds, and protection from creditors that are only available
      for investments in that state’s qualified tuition program.
    </p>
    <p>
      The effectiveness of the Tax-Loss Harvesting strategy to reduce the tax
      liability of the client will depend on the client’s entire tax and
      investment profile, including purchases and dispositions in a client’s (or
      client’s spouse’s) accounts outside of Wealthfront Advisers and type of
      investments (e.g., taxable or nontaxable) or holding period (e.g., short-
      term or long-term).Tax loss harvesting may generate a higher number of
      trades due to attempts to capture losses. There is a chance that trading
      attributed to tax loss harvesting may create capital gains and wash sales
      and could be subject to higher transaction costs and market impacts. In
      addition, tax loss harvesting strategies may produce losses, which may not
      be offset by sufficient gains in the account and may be limited to a
      $3,000 deduction against income. The utilization of losses harvested
      through the strategy will depend upon the recognition of capital gains in
      the same or a future tax period, and in addition may be subject to
      limitations under applicable tax laws, e.g., if there are insufficient
      realized gains in the tax period, the use of harvested losses may be
      limited to a $3,000 deduction against income and distributions. Losses
      harvested through the strategy that are not utilized in the tax period
      when recognized (e.g., because of insufficient capital gains and/or
      significant capital loss carryforwards), generally may be carried forward
      to offset future capital gains, if any.
    </p>
    <p data-testid="full-disclosures">
      All investing involves risk, including the possible loss of money you
      invest, and past performance does not guarantee future performance.
      Historical returns, expected returns, and probability projections are
      provided for informational and illustrative purposes, and may not reflect
      actual future performance. Please see our{" "}
      <a
        href="https://www.wealthfront.com/legal/disclosure"
        target="_blank"
        rel="noreferrer"
      >
        Full Disclosure
      </a>{" "}
      for important details.
    </p>
    <p>
      Wealthfront Advisers, Wealthfront Brokerage and Wealthfront Software are
      wholly owned subsidiaries of Wealthfront Corporation.
    </p>
    <p> © 2024 Wealthfront Corporation. All rights reserved. </p>
  </div> */}
</div>

      </div>
    </div>
  </footer>
</div>

  )
}
