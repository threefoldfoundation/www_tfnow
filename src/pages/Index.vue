<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="30" />
          <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
            THREEFOLD NOW
          </h2>
        </div>
        <h1 class="text-4xl text-center lg:text-5xl">
          The Internet of Tomorrow, Available Today
        </h1>
        <p class="text-xl font-medium text-center">
          A marketplace of peer-to-peer solutions to decentralize our lives!
          <br>
          Currently in demo mode running on testnet.
          <br>
        </p>

        <div class="flex justify-center mt-8">
          <g-link
            to="/docs/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Get started
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">
         <!--  Open Source. MIT License. <span class="border-b border-dashed border-ui-primary text-ui-primary">Make it your own</span>.-->
        </p>

      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <ZapIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Incredibly Fast
          </h3>
          <p class="text-lg text-left">
          Ensure the correct execution of your workloads and enjoy compute, network, web and storage all in one place</p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <SearchIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Ultra Secure
          </h3>
          <p class="text-lg text-left">
          Any application that runs on Linux can run on the ThreeFold Grid with more speed, cost-efficiency, privacy & security, and sustainability</p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <MoonIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Peer to Peer
          </h3>
          <p class="text-lg text-left">
          Independent farmers dedicate hardware to form the ThreeFold Grid.</p>
        </div>
      </div>

    </div>
    <div id="crisp-chatbox" dir="ltr" translate="no" data-blocked="false" data-lock-maximized="false" data-last-operator-face="false" data-availability-tooltip="false" data-hide-vacation="false" data-hide-on-away="false" data-hide-on-mobile="false" data-position-reverse="false" data-full-view="false" data-small-view="true" data-large-view="false" data-availability="online" data-is-activity-ongoing="false" data-was-availability-online="true" data-has-local-messages="false" class="cc-kv6t" lang="en"><div class="cc-1xry cc-1gmp"><a data-maximized="false" data-is-failure="false" href="#!" class="cc-unoo" data-cshid="4da74019-67fa-0c57-3d87-53e82bf412fb"><span class="cc-1c9v"><span data-id="general_entice" data-with-helpdesk="true" data-is-concealed="false" class="cc-1bue"><span class="cc-1bcp"><span class="cc-1s28 cc-kgeu"><span class="cc-tkyh"><span class="cc-1t9t"><span class="cc-g0ak cc-hy0f"></span><span data-has-avatar="true" class="cc-xc93"><span class="cc-17df"><span class="cc-od26 cc-151q">Questions? Chat with me!</span><span data-id="online" class="cc-1rau cc-kgeu">Support is online.</span><span data-id="away" class="cc-1rau cc-kgeu">Support is away.</span></span><span class="cc-56dg"><span class="cc-8exe cc-he6y"><span style="background-image: url('https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2F227a93bc2d04e600%2Favatarroel_1381kx4.jpg&amp;width=240&amp;height=240&amp;1601799622846') !important;" class="cc-1h5w cc-wsm4"></span></span></span></span></span></span><span data-when="online" class="cc-rzi5"><span class="cc-1yk0 cc-183m"><span class="cc-1viy"><span class="cc-16up cc-jq4y cc-151q">Chat with ThreeFold Network Team</span></span></span></span><span data-when="away" class="cc-rzi5"><span data-pop="spotlight" class="cc-1yk0 cc-183m"><span class="cc-1viy"><span class="cc-16up cc-jq4y cc-151q">Search help center</span></span></span><span class="cc-1yk0 cc-183m"><span class="cc-1viy"><span class="cc-16up cc-151q">Chat</span></span></span></span></span></span></span></span><span class="cc-7doi cc-1ada"><span data-id="chat_closed" class="cc-1iv2"><span class="cc-1yxw"><span class="cc-16qx cc-1eqr"></span></span><span data-is-ongoing="false" class="cc-15mo"></span></span></span></a></div></div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
    const title = 'ThreeFold Now';
    const description = 'Autonomous and decentralized storage and compute owned by everyone, everywhere !';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<script type="text/javascript">
      window.$crisp=[];window.CRISP_WEBSITE_ID="1a5a5241-91cb-4a41-8323-5ba5ec574da0";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
</script>