<script>
  import Navbar from './components/Navbar.svelte'
  import Projects from './components/Projects.svelte'
  import Leaderboard from './components/Leaderboard.svelte'
  import Footer from './components/Footer.svelte'
  import { getAvatars } from './getAvatars'
  import { onMount } from 'svelte'
  import Statistics from "./components/Statistics.svelte";
  import Toggle from "./components/Toggle.svelte";

  let tab = 0
  let data = [];
  let verificationResult = null;

  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const userData = {};
    const requiredFields = ['email', 'rollNo', 'name', 'githubUsername', 'contactNumber'];
    
    for (const field of requiredFields) {
      const value = params.get(field);
      if (!value) {
        console.log(`Missing ${field} in query parameters`);
        return null;
      }
      userData[field] = value;
    }
    
    return userData;
  }

  function clearQueryParams() {
    // Remove query parameters without refreshing the page
    const newUrl = window.location.pathname;
    window.history.pushState({}, '', newUrl);
  }

  async function verifyUser() {
    const userData = getQueryParams();
    
    if (!userData) {
      verificationResult = 'Missing required parameters';
      return;
    }

    try {
      const response = await fetch('https://git-init-foss-api-1.onrender.com/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        verificationResult = 'Verification successful!';
        alert(verificationResult);
        clearQueryParams();
      } else if(response.status=="400") {
        alert("User already registered");
        clearQueryParams();
      }
    } catch (error) {
      console.error('Error during verification:', error);
      verificationResult = 'An error occurred during verification. Please try again later.';
    }
  }

  onMount(() => {
    if (false) {
      getAvatars()
    }
    window.document.body.classList.toggle('dark-mode')
    verifyUser();
  })

  onMount(() => {
    const URL = "https://git-init-foss-api-1.onrender.com/stats";
    fetch(URL).then((response) => {
      response
        .json()
        .then((dat) => {
          data.push(dat.TotalPR);
          data.push(dat.NumberOfActiveContributors);
          data.push(dat.NumberHard);
          data.push(dat.NumberMedium);
          data.push(dat.NumberEasy);
        })
        .catch((er) => {
          error = er;
        });
    });
  })
</script>

<main>
  <Navbar bind:tab />
  <Toggle />

  {#if verificationResult}
    <div class="verification-result">
      {verificationResult}
    </div>
  {/if}

  {#if tab === 0}
    <Projects />
  {:else if tab === 1}
    <Leaderboard />
  {:else}
    <Statistics {data} />
  {/if}
  <Footer />
</main>

<style>
  :global(body) {
    background-color: #f2eee2;
    color: black;
    transition: background-color 0.3s
  }
 
  :global(body.dark-mode) {
    background-color: rgb(0, 1, 2);
    color: #bfc2c7;
  }

  .verification-result {
    padding: 10px;
    margin-bottom: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>