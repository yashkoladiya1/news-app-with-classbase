import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
// import PropTypes from 'prop-types'

class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "China races to bolster health system as COVID surge sparks global concern - Reuters.com",
      description:
        "Cities across China scrambled to install hospital beds and build fever screening clinics on Tuesday as authorities she is very beatiful  responce in world reported five more…",
      url: "https://www.reuters.com/business/healthcare-pharmaceuticals/china-races-install-hospital-beds-covid-surge-sparks-concern-abroad-2022-12-20/",
      urlToImage:
        "https://www.reuters.com/resizer/TJZQB_F8nW79W9u2a0SxuZt_o3E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PYOCSIKBIJJV7K5WN3TFKVNFF4.jpg",
      publishedAt: "2022-12-20T07:07:00Z",
      content:
        "BEIJING/SINGAPORE, Dec 20 (Reuters) - Cities across China scrambled to install hospital beds and build fever screening clinics on Tuesday as authorities reported five more deaths and international co… [+4873 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Kyung Lah",
      title:
        "Maricopa judge allows narrow part of Kari Lake's Arizona election lawsuit to head to trial - CNN",
      description:
        "A Maricopa County Superior Court judge ruled Monday that Arizona Republican Kari Lake, who lost last month's gubernatorial race, will be allowed to head to trial on two narrow claims in an election lawsuit.",
      url: "https://www.cnn.com/2022/12/20/politics/kari-lake-election-lawsuit-arizona/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221102155529-kari-lake-phoenix-file-102722.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-20T05:16:00Z",
      content:
        "A Maricopa County Superior Court judge ruled Monday that Arizona Republican Kari Lake, who lost last months gubernatorial race, will be allowed to head to trial on two narrow claims in an election la… [+2079 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Jason Owens",
      title:
        "Donovan Mitchell speaks of 'draining' Utah experience, then leads Cavs in blowout of Jazz - Yahoo Sports",
      description:
        "Mitchell opened up about his challenges in Utah, then torched the Jazz in his first matchup against his former team.",
      url: "https://sports.yahoo.com/donovan-mitchell-speaks-of-draining-utah-experience-then-leads-cavs-in-blowout-of-jazz-051230018.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/E9bsMaRolyxzUgmSZJ8Gng--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-12/9676cee0-8024-11ed-be65-4c639623e629",
      publishedAt: "2022-12-20T05:12:00Z",
      content:
        "Donovan Mitchell led the Cleveland Cavaliers on Monday to a 122-99 win over the Utah Jazz team that traded him this offseason.\r\nPrior to the game, he opened up to Andscape's Marc J. Spears about his … [+3629 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Perseverance: Nasa Mars rover to lay down rocks for Earth return - BBC",
      description:
        "The Perseverance rover is set to make a store of rocks that can be brought home by a future mission.",
      url: "https://www.bbc.com/news/science-environment-64006377",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/97F8/production/_128040983_selfie.jpg",
      publishedAt: "2022-12-20T04:45:51Z",
      content:
        "The American space agency's Mars rover Perseverance will this week begin dropping samples of rock on to the surface of the Red Planet.\r\nThe materials have been packaged in small titanium tubes with t… [+4529 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Los Angeles Rams vs. Green Bay Packers | 2022 Week 15 Game Highlights - NFL",
      description:
        "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
      url: "https://www.youtube.com/watch?v=HL_p8QLlwkE",
      urlToImage: "https://i.ytimg.com/vi/HL_p8QLlwkE/maxresdefault.jpg",
      publishedAt: "2022-12-20T04:23:46Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title:
        "Longer-Lasting Benefits – A More Effective Treatment for a Common Heart Condition - SciTechDaily",
      description:
        "Early treatment with catheter cryoablation can stop the progression of a disease and lower the chance of severe health risks. ",
      url: "https://scitechdaily.com/longer-lasting-benefits-a-more-effective-treatment-for-a-common-heart-condition/",
      urlToImage: "https://scitechdaily.com/images/Cryoballoon-Ablation.jpg",
      publishedAt: "2022-12-20T03:33:11Z",
      content:
        "Cryoablation involves guiding a small tube into the heart and inflating a small balloon to kill problematic tissue with cold temperatures. Credit: Medtronic\r\nEarly treatment with catheter cryoablatio… [+5200 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Alex Hern",
      title:
        "Elon Musk breaks silence after 10 million Twitter users vote for him to step down - The Guardian",
      description:
        "The billionaire says only paid Twitter Blue subscribers will be able to vote in future policy-related polls on the platform",
      url: "https://www.theguardian.com/technology/2022/dec/20/elon-musk-breaks-silence-after-10-million-twitter-users-vote-for-him-to-step-down",
      urlToImage:
        "https://i.guim.co.uk/img/media/c2b7a32c335dfa35442109f3eb411710b3f7337f/0_82_3700_2220/master/3700.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7908c2370e49c54d41aebbd60d34f6cb",
      publishedAt: "2022-12-20T03:20:00Z",
      content:
        "Elon Musk has tweeted for the first time since more than 10 million people voted in favour of him stepping down as Twitters chief executive, saying that only paid Twitter Blue subscribers will be abl… [+2750 chars]",
    },
    {
      source: {
        id: null,
        name: "KSHB",
      },
      author: "Mike Nicco",
      title:
        "Flurries, then much colder tonight; 1st significant snowstorm arrives Thursday - KSHB 41 Kansas City News",
      description: "Travel not recommended Thursday, Friday",
      url: "https://www.kshb.com/weather/weather-forecast-update",
      urlToImage:
        "https://ewscripps.brightspotcdn.com/dims4/default/1698e1b/2147483647/strip/true/crop/1280x672+0+24/resize/1200x630!/quality/90/?url=https%3A%2F%2Fx-default-stgec.uplynk.com%2Fausw%2Fslices%2F8c0%2Fe14174ecfc5d469285bc97a89e713431%2F8c04b8ed9c1f4f2dbd1447bfd5aff1af%2Fposter_ff19b8c1a80a4880aa556f0a38661eeb.jpg",
      publishedAt: "2022-12-20T03:02:00Z",
      content:
        "WEATHER HEADLINES\r\n<ul><li>Flurries tonight, then breezy and freezing cold</li><li>Use Tuesday and Wednesday to travel and prepare for our first significant snow this season.</li><li>Winter Storm Wat… [+1382 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Nicki Cox",
      title:
        "Kim Kardashian 'looks back' at her butt in silver Skims bikini - Page Six",
      description:
        "The 42-year-old posted a photo of her famous backside in a skimpy silver bikini to Instagram on of the year.",
      url: "https://pagesix.com/2022/12/19/kim-kardashian-looks-back-at-her-butt-in-silver-skims-bikini/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/12/kim-kardashian-looks-back-at-butt-in-silver-skims-bikini.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-12-20T02:33:00Z",
      content:
        "Kim Kardashian is ready to bring back the “belfie” in 2023. \r\nThe 42-year-old posted an Instagram photo of her famous backside in a skimpy silver bikini on Monday to celebrate the end of the year. \r\n… [+1915 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Samantha Lock",
      title:
        "‘My power’s really low’: Nasa’s Insight Mars rover prepares to sign off from the Red Planet - The Guardian",
      description:
        "Robot says it might be sending its last message from Mars as dust chokes out its power supply",
      url: "https://www.theguardian.com/science/2022/dec/20/my-powers-really-low-nasas-insight-mars-rover-signs-off-from-the-red-planet",
      urlToImage:
        "https://i.guim.co.uk/img/media/725c12465a2fd202a491c6f41c013b725792ac82/0_35_1016_610/master/1016.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c67e56d2b431b11a7ac071249fa1bd86",
      publishedAt: "2022-12-20T02:18:00Z",
      content:
        "Nasas InSight lander has delivered what could be its final message from Mars, where it has been on a history-making mission to reveal the secrets of the Red Planets interior.\r\nIn November the space a… [+2758 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Brad Lendon",
      title:
        "Russia and China unite for live-fire naval exercises in waters near Japan - CNN",
      description:
        "China and Russia will begin a weeklong joint live-fire naval exercise in the East  Pacific.",
      url: "https://www.cnn.com/2022/12/19/asia/russia-china-naval-exercises-intl-hnk-ml/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221219203643-01-china-russia-naval-drills-102321-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-20T02:07:00Z",
      content:
        "China and Russia will begin a weeklong joint live-fire naval exercise in the East China Sea on Wednesday, the Russian Defense Ministry said in a statement, as the two partners step up cooperation in … [+2155 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Fox News Staff",
      title:
        "JESSE WATTERS: The neighborhood for Watters' world is no longer safe - Fox News",
      description:
        "Fox News host Jesse Watters provides insight into the break in at Robert De Niro's rented  Primetime.'",
      url: "https://www.foxnews.com/media/jesse-watters-neighborhood-watters-world-no-longer-safe",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/Video-63.jpg",
      publishedAt: "2022-12-20T02:01:17Z",
      content:
        'Fox News host Jesse Watters details the burglary that occurred at Robert De Niro\'s townhouse and what is says about the crime crisis in New York City and nationwide on "Jesse Watters Primetime."\r\nJES… [+1675 chars]',
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Mike Wall",
      title: "Hole spotted in leaky Russian Soyuz spacecraft - Space.com",
      description:
        "It's unclear at the moment if the hole was caused by a micrometeoroid strike.",
      url: "https://www.space.com/russian-soyuz-spaceraft-leak-hole-detected",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/eQSPoZkXhcbuNxUuUPbDy4-1200-80.jpg",
      publishedAt: "2022-12-20T01:09:37Z",
      content:
        "The leaky Russian Soyuz spacecraft docked to the International Space Station (ISS) has a small hole in it, an inspection has found.\r\nThe Soyuz's coolant leaked away on Wednesday night (Dec. 14), as t… [+2665 chars]",
    },
    {
      source: {
        id: null,
        name: "kwwl.com",
      },
      author: "Brandon Libby",
      title: "TRACKING: Dangerous cold and blizzard-like conditions - kwwl.com",
      description: "Travel is likely impacted late this week.",
      url: "https://www.kwwl.com/tracking-dangerous-cold-and-blizzard-like-conditions/article_96ac8bee-7f83-11ed-87a9-573d74f351ca.html",
      urlToImage:
        "https://bloximages.newyork1.vip.townnews.com/kwwl.com/content/tncms/assets/v3/editorial/c/5c/c5c58b78-7f8e-11ed-8f6e-03ca73dcee79/63a0485dd0289.image.png?crop=1920%2C1008%2C0%2C35&resize=1200%2C630&order=crop%2Cresize",
      publishedAt: "2022-12-20T01:01:07Z",
      content:
        "Strong late week system coming through.\r\nToday: Very cold to start today with temps near 0 and wind chills below zero. Clouds build early to give us cloudy skies. By the mid-afternoon, a weak disturb… [+2173 chars]",
    },
    {
      source: {
        id: null,
        name: "WTMJ-TV",
      },
      author: "Brian Niznansky",
      title: "Winter Storm Watch issued for Southeast Wisconsin - TMJ4 News",
      description:
        "A Winter Storm Watch has been issued for Southeast Wisconsin beginning Thursday through Saturday.",
      url: "https://www.tmj4.com/weather/forecast/todays-forecast/southeast-wisconsin-weather-saturday-brings-on-and-off-snow-showers",
      urlToImage:
        "https://ewscripps.brightspotcdn.com/dims4/default/02eb532/2147483647/strip/true/crop/1280x672+0+24/resize/1200x630!/quality/90/?url=https%3A%2F%2Fx-default-stgec.uplynk.com%2Fausw%2Fslices%2F747%2F44c3f81cadf84cf5a6f4e6d100388208%2F7470a00290f54c798fe982ba519ed7a9%2Fposter_cbf0dddd102e4f5f9b25207248c039e0.jpg",
      publishedAt: "2022-12-20T00:56:00Z",
      content:
        "WINTER STORM WATCH issued for the following counties beginning Thursday at 6 a.m. through 6 a.m. Saturday: Kenosha, Racine, Washington, Ozaukee, Milwaukee, Sheboygan, Fond du Lac, Walworth, Dodge, Wa… [+1889 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Nouran Salahieh, Cheri Mossburg",
      title:
        "Harvey Weinstein is convicted of 3 of 7 charges, including rape, in his Los Angeles sexual assault trial - CNN",
      description: "[Breaking news update, published at 7:46 p.m. ET]",
      url: "https://www.cnn.com/2022/12/19/us/harvey-weinstein-trial-deliberations-los-angeles-monday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221011183258-harvey-weinstein-court-100422.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-20T00:33:00Z",
      content:
        "[Breaking news update, published at 7:46 p.m. ET]\r\nFormer movie producer Harvey Weinstein was found guilty of three of seven charges against him, including rape, Monday in a Los Angeles sexual assaul… [+8262 chars]",
    },
    {
      source: {
        id: null,
        name: "Kotaku",
      },
      author: "Luke Plunkett",
      title:
        "John Carmack Quits Meta, Says 'This Is The End Of My Decade In VR' - Kotaku",
      description:
        "The Doom co-creator has a startup to run, and 'seeing something that is grossly inefficient hurts your soul'",
      url: "https://kotaku.com/john-carmack-quit-meta-facebook-vr-oculus-rift-doom-1849912694",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/78ab8007809207d71bcdc92b694cc928.jpg",
      publishedAt: "2022-12-20T00:30:00Z",
      content:
        "John Carmack, legendary game designer, rocket guy and VR enthusiast, has announced that he is leaving both Meta/Facebook, and the virtual reality business itself, behind after a decade as one of its … [+3566 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Epic Games Fined More than Half a Billion Over Fortnite's 'Unfair' Microtransactions - IGN Daily Fix - IGN",
      description:
        'On today\'s IGN The Daily Fix:Epic Games will have to pay $520 million over "design tricks...to dupe millions of players into making unintentional purchases" ...',
      url: "https://www.youtube.com/watch?v=aw6vwvJIAY4",
      urlToImage: "https://i.ytimg.com/vi/aw6vwvJIAY4/maxresdefault.jpg",
      publishedAt: "2022-12-20T00:28:40Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Who13.com",
      },
      author: "Justin Surrency",
      title:
        "Police identify victims of double homicide as mother, daughter. - WHO TV 13 Des Moines News & Weather",
      description:
        "DES MOINES, Iowa — Police have now identified the victims in what appears to be a double homicide in Des  …",
      url: "https://who13.com/news/police-identify-victims-of-double-homicide-as-mother-daughter/",
      // "urlToImage": "https://who13.com/wp-content/uploads/sites/19/2022/12/Daughter-Mom-death.jpg?w=1280",
      publishedAt: "2022-12-20T02:38:37Z",
      content:
        "DES MOINES, Iowa — Police have now identified the victims in what appears to be a double homicide in Des Moines as a mother and daughter. 47-year-old Danielle Remily and her daughter, 20-year-old Emm… [+1412 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Paulina Villegas, Tory Newmyer",
      title:
        "Bankman-Fried agrees to extradition from Bahamas to face U.S. charges - The Washington Post",
      description:
        "Former crypto CEO’s decision could expedite the resolution of the criminal and civil cases against him.",
      url: "https://www.washingtonpost.com/technology/2022/12/19/sam-bankman-fried-extradition-bahamas/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2AEVLTH26R72LG5AZBST53SR2M.jpg&w=1440",
      publishedAt: "2022-12-20T00:28:00Z",
      content:
        "Comment on this story\r\nNASSAU, Bahamas Sam Bankman-Fried has agreed voluntarily to be extradited to the United States where he has been charged with defrauding customers of his cryptocurrency exchang… [+6251 chars]",
    },
  ];

  // static defaultProps = {
  //     country:'in',
  //     pagesize: 9,
  //     category:gen
  // }
  // static PropTypes={
  //     country : PropTypes.string,
  //     pagesize:PropTypes,
  //     category:PropTypes.string
  // }
  constructor() {
    super();
    console.log("Hello I am constructer");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=467d8189182543218d557f112de20977&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let Data = await fetch(url);
    let parsel = await Data.json();
    console.log(parsel);
    this.setState({
      articles: parsel.articles,
      totalResults: parsel.totalResults,
      loading: false,
    });
  }
  handleprevclick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${
      this.props.country
    }&apiKey=467d8189182543218d557f112de20977&page=${
      this.state.page - 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let Data = await fetch(url);
    let parsel = await Data.json();
    console.log(parsel);
    this.setState({
      page: this.state.page - 1,
      articles: parsel.articles,
      loading: false,
    });
  };
  handlenextclick = async () => {
    console.log("next");
    //    if(this.state.page + 1 > Math.ceil(this.state.totalresults/9)){
    //    }
    //    else{
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${
      this.props.country
    }&apiKey=467d8189182543218d557f112de20977&page=${
      this.state.page + 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let Data = await fetch(url);
    let parsel = await Data.json();
    console.log(parsel);
    this.setState({
      page: this.state.page + 1,
      articles: parsel.articles,
      loading: false,
    });
    //    }
    let a = Math.ceil(this.state.totalResults / 12);
    console.log(this.state.totalResults);
    console.log(a);
  };
  render() {
    return (
      <div className="container pt-5 my-3">
        {this.state.loading && <Spinner />}
        <h1 className="pb-5  text-center">---- Top Headline News ----</h1>
        <div className="row">
          {/* <div className="d-grid grid-col"> */}
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div
                  className=" col-sm-12 col-md-6 col-lg-4  "
                  key={element.url}
                >
                  {/* // <div className=" h-100  " key={element.url}> */}
                  <Newsitem
                    title={element.title?.slice(0, 42)}
                    description={element.description?.slice(0, 85)}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                  />
                </div>
              );
            })}
          <div className="container d-flex justify-content-between mt-5 mb-5">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-sm btn-danger"
              onClick={this.handleprevclick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
              }
              className="btn btn-sm btn-danger "
              onClick={this.handlenextclick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
