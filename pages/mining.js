import React, { Component, Fragment } from "react";
import Highlight from 'react-highlight';

import Layout from "../src/components/layout";

export default class extends Component {
  render() {
    return (
      <Layout>
        <div className="container mining-page">
          <header className="section header mb-5">
            <h2>Mining</h2>

            <p className="lead mt-5">You can use direct discount for windows.</p>
            <p className="lead text-muted">
              xmrig-2.8.3-gcc-win32.zip - <a href="https://github.com/xmrig/xmrig/releases/download/v2.8.3/xmrig-2.8.3-gcc-win32.zip">Download</a>
            </p>
            <p className="lead text-muted">
              xmrig-2.8.3-gcc-win64.zip - <a href="https://github.com/xmrig/xmrig/releases/download/v2.8.3/xmrig-2.8.3-gcc-win64.zip">Download</a>
            </p>
            <p className="lead text-muted">
              xmrig-2.8.3-msvc-win64.zip - <a href="https://github.com/xmrig/xmrig/releases/download/v2.8.3/xmrig-2.8.3-msvc-win64.zip">Download</a>
            </p>
          </header>

          <div className="row">
            <div className="col-lg-12">
              <p className="lead">Mining tmycoin in linux(Ubuntu, Debian) using xmring</p>
              <p className="lead text-muted mb-5">
                There are a couple of things you need for mining tmycoin in linux(Ubuntu, Debian) using xmring:
              </p>

              <p>You need to create a wallet.</p>
              <p>A tmycoin wallet (get one from <a href="https://wallet.timmycoin.net" target="_blank">wallet.timmycoin.net</a>)</p>

              <Highlight language="shell">
                {`
wget https://github.com/xmrig/xmrig/releases/download/v2.8.3/xmrig-2.8.3-xenial-amd64.tar.gz
tar -xvf xmrig-2.8.3-xenial-amd64.tar.gz
cd xmrig-2.8.3-xenial-amd64
                `}
              </Highlight>


              <p className="lead text-muted mb-5">You now have a binary for your compiled xmrig ready to run on your linux and start mining tmycoin.</p>

              <h3 className="mb-3">mining tmycoin in linux using xmring: Mining</h3>
              <p className="lead text-muted mb-2">This is where the fun starts</p>
              <p className="lead text-muted mb-2">You’ll need to pick a mining pool (I use <a href="/pools">Pools</a>)</p>

              <p className="lead text-muted mb-2">Change the values found below.</p>
              <Highlight language="javascript">
                {`
{
  "url": "", // Pool address
  "name": "" // Wallet Address
}
                `}
              </Highlight>

              <Highlight language="javascript">
                ./xmrig
              </Highlight>

              <h3 className="mb-3">Alternate with direct command</h3>
              <Highlight language="shell">
                {`
xmrig -v 1 -t 2 -o pool-address:5555 -u your_wallet -p miner_name:email@you.com -k─
                `}
              </Highlight>
              <p className="lead text-muted mb-2">
                Once you change the parameters for your miner name, email address and tmycoin wallet, you can start the script and it will run and show your mining output!
              </p>

              <h3 className="mb-3">mining tmycoin in linux using xmring: cli options</h3>
              <Highlight language="shell">
                {`
-a, --algo=ALGO       cryptonight (default) or cryptonight-lite
  -o, --url=URL         URL of mining server
  -O, --userpass=U:P    username:password pair for mining server
  -u, --user=USERNAME   username for mining server
  -p, --pass=PASSWORD   password for mining server
  -t, --threads=N       number of miner threads
  -v, --av=N            algorithm variation, 0 auto select
  -k, --keepalive       send keepalived for prevent timeout (need pool support)
  -r, --retries=N       number of times to retry before switch to backup server (default: 5)
  -R, --retry-pause=N   time to pause between retries (default: 5)
      --cpu-affinity    set process affinity to CPU core(s), mask 0x3 for cores 0 and 1
      --cpu-priority    set process priority (0 idle, 2 normal to 5 highest)
      --no-huge-pages   disable huge pages support
      --no-color        disable colored output
      --donate-level=N  donate level, default 5% (5 minutes in 100 minutes)
      --user-agent      set custom user-agent string for pool
  -B, --background      run the miner in the background
  -c, --config=FILE     load a JSON-format configuration file
  -l, --log-file=FILE   log all output to a file
      --max-cpu-usage=N maximum CPU usage for automatic threads mode (default 75)
      --safe            safe adjust threads and av settings for current CPU
      --nicehash        enable nicehash support
      --print-time=N    print hashrate report every N seconds
  -h, --help            display this help and exit
  -V, --version         output version information and exit
                `}
              </Highlight>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
