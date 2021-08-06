import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bulls versus Bears</title>
        <link rel="icon" href="/images/logo.png" />

        <meta property="og:title" content="Bulls vs Bears" key="ogtitle" />
        <meta property="og:description" content="Take part in the monthly battle between bulls and bears, which is worthy to get the medal. The power lies in your hands, root for your favourite and watch them emerge as winners." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://bullsversusbears.art/" key="ogurl"/>
        <meta property="og:image" content="https://bullsversusbears.art/gif.gif  " key="ogimage"/>
        <meta property="og:site_name" content="https://bullsversusbears.art/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="bullsversusbears.art" key="twdomain" />
        <meta property="twitter:url" content="https://bullsversusbears.art/" key="twurl" />
        <meta name="twitter:title" content="Bulls Vs Bears." key="twtitle" />
        <meta name="twitter:description" content="In this RING, we have two teams: TEAM BEAR and TEAM BULL, where do you belong" key="twdesc" />
        <meta name="twitter:image" content= 'https://bullsversusbears.art/gif.gif'  key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="#about" className="text-4xl text-white hover:text-black m-6">About</a>
              <a href="#" className="text-4xl text-white hover:text-black m-6">MINT!</a>
              <a href="#snippet" className="text-4xl text-white hover:text-black m-6">Snippet</a>
              <a href="#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a>
              <a href="#club" className="text-4xl text-white hover:text-black m-6">Club</a>
              <a href="" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">WELCOME, get familiar with <br/><span className="text-blau">Our contestants</span></h1>
                    <p className="text-2xl text-white my-6  montserrat">For this BATTLE <span className="text-5xl Poppitandfinch ">we have two teams </span> <span className="text-blau text-5xl Poppitandfinchsans">Team bulls vs Team bears,</span> <span className="text-5xl Poppitandfinch">which one deserves the medal </span><span className="text-span-2 font-bold">for the month?</span>.<br />‍<br />Support your favorite team <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">Cheer them on </span><span className="text-5xl Poppitandfinch ">and</span><span className="text-blau text-5xl Poppitandfinchsans"> do not </span> <br/>give up.
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> 11 August 2021. 2pm EST. <br />‍
                    <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 5555</strong> BVB.<br/><strong>PRICE: 0.02 ETH </strong>each.</span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7xav4n6/n192/cf11/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cac000/cpc000/pcfff/tcfff/fs100/szw320/szh135/iso2021-08-11T14:00:00" allowtransparency="true" frameborder="0" width="425" height="25"></iframe>

                  </div>
                  <img className="lg:w-1/2 w-3/4" src="images/logo.png" width="400px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO MINTING PAGE!</a>
                
                
            </div> 
            </div>



    

                <div id="snippet" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/gif.gif" alt="" width="250px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">READ ME</h2>
                    <p className="text-xl text-white my-6  montserrat"> Most people have experienced their share of the bull and bear season in cryptocurrency, <span className="font-bold"> most times we do not have a say in this and our little effort yields little or no change.</span> NOT ANYMORE! <span className="font-bold"> YOU now have a SAY, </span> Decide if we are going to experience a bull or bear month. <span className="font-bold"> HOW? </span> On the secondary market(i.e. OPENSEA) KEEP the FLOOR PRICE higher than the launch price(0.02ETH) monthly, then every hodler of BVB gets to share 80% of the royalties for the month. <span className="font-bold"> If the FLOOR PRICE is lower than launch price, </span> unfortunately hodlers will get just 20% of total royalties for the month.   
                    </p>
                    <p className="text-xl text-white my-6  montserrat">Take part in the monthly battle between bulls and bears, which is worthy to get the medal. The power lies in your hands, root for your favourite and watch them emerge as winners.</p>
                    <p className="text-xl text-white my-6  montserrat"> The royalties and NFT of the month depends on it. BEAR market gets just 20% and a BEAR NFT ; BULL market gets 80% and a BULL NFT
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Your support and participation makes a difference!
                    </p>
                  </div>
                </div>
                
                <div id="gallery" className="   mx-6 py-6">
                    <h2 className="text-blau Poppitandfinchsans text-7xl text-center">MEET SOME OF US: you get BEARS or BULLS for the month depending on the floor price</h2>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                    <div className="md:w-1/2">
                      <div className=" border-blue-300 p-2"><img src="images/logo.png" alt="" width="600px" className="feature-image"/></div>

                    </div>
                    <div className="md:w-1/2 flex flex-wrap">
                      <div className=" p-2 w-1/2"><img src="images/27.png" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/147.png" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/99.png" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/65.png" alt="" width="400px" className="feature-image"/></div>

                    </div>
                  </div>
                </div>

              <div id="roadmap" className="">
                
              <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
              <img src="/images/Roadmap.png"/>
              <ul className="">
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 50% SALES: </span> Our Token will be created <a target="_blank" href="https://girlswhocode.com/" className="underline text-black font-bold"></a>, this will be used in the governance of our NFT. <span className="font-bold"> Other plans? </span> This would be decided by the community because we would like you to be involved in decision making. </li>
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 100% SALES: </span>We will distribute 50% of the token to hodlers</li>
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> Secondary sales: 5% royalty on each sales </span> This will be shared among hodlers based on the outcome of the monthly battle </li>

              </ul>
          
              <p className="text-xl text-white my-6  montserrat"> We would like to thank Boringbananas.co for making their resources available, it has been of great help.
              </p>


              </div>
              
              <div id="club" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">ROYALTIES CLUB</h2>
                <div className="flex justify-around flex-wrap">
                <p className="text-xl text-white my-6  montserrat"> You need at least one of bullsVSbears NFT to become a member. You get rewarded with your share of the monthly royalties and a certain percentage of our governance token
              </p>
  
                  
                </div>
                </div>

                <div id="club" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">PROPOSAL CLUB</h2>
                <div className="flex justify-around flex-wrap">
                <p className="text-xl text-white my-6  montserrat"> You need at least 20 of bullsVSbears NFT to become a member, You can propose new features or decision. Receive a badge when your proposal gets accepted by the community.
              </p>
  
                  
                </div>
                </div>
       


              
              <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className=" p-4"><img src="images/letstalk.png" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">CONTACT US</h2>
                    <p className="text-xl text-white my-6  montserrat"> We'd love to hear from you! 
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Send us a message <a className="text-black underline font-bold" target="_blank" href="mailto:bearsbulls00@gmail.com">bearsbulls00@gmail.com</a>,<br/>
                    or reach out to us on Twitter <a className="text-black underline font-bold" target="_blank" href="#">Coming soon</a><br/> 
                    join our <a className="text-black underline font-bold" target="_blank" href="#">Discord Server</a>.
                    </p>
                  </div>
       


              </div>   
          </div>  
    </div>  
    )
  }