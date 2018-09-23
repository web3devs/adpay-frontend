let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function() {
    var results
    var error
    var web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      results = {
        web3: web3
      }
      console.log('Injected web3 detected.');
      resolve(results)
    } else {
      console.log('No web3 instance injected.');
      error = {
        error: "You need to log into MetaMask."
      }
      reject(error)
    }
  })
})

export default getWeb3
