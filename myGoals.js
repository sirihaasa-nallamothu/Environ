var submitBtn = $('.submitBtn');


submitBtn.on("click", showInfo());
submitBtn.on("click",scroll());

function scroll(){
  window.scrollBy(0, 10000000);
}

function showInfo(){
  var infoCardContainer = $('.infoCardContainer');
  event.preventDefault();
  if (document.getElementById("compost").checked == true) {
    console.log("Compost is checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Composting</h1>
      <img src="https://i.dailymail.co.uk/i/pix/2013/12/08/article-2520351-19E6B90500000578-742_634x423.jpg" class="post"alt="compost"></img>
      <h4>How Does This Make a Difference?</h4> 
      <p class = explanation>Composting is a great way to help the environment, and one that you can do from your own backyard! A major benefit of composting is that it keeps food out of landfills and reduces food waste. Additionally, if you use your composted soil for gardening, you won't need to use fertilizer or pesticides nearly as much as before. This helps cut down on the greenhouse gas emissions that come from producing these products. Composting also helps soil to hold in carbon dioxide, helping to counteract your carbon footprint! </p>
      <h4> How to Compost</h4>
      <p class = explanation> Check out this informative page on composting. </p>
      <br> </br>
      <a href = "https://learn.eartheasy.com/guides/composting/">
      
      <button class="learnmore"> Learn More </button>  </a> 
      
    </section>`);
  }if (document.getElementById("straws").checked == true){
    console.log("Straws are checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Swapping Your Straws</h1>
      <img class="post"  src="https://www.steelystraws.com/wp-content/uploads/2019/02/straw_colored_steel-compressor.jpg" alt="steel straws" ></img>
      <h4>How Does This Make a Difference?</h4> 
      <p class = explanation>Plastic straws are some of the most commonly found plastics in the ocean, and they're also some of the most unnecessary. When swallowed by sea life, they can block digestive tracks, killing off animals and making an impact on the entire food chain. Luckily, there's an easy way to help prevent plastic straws from ending up in the ocean - you can simply switch to reusable steel or silicone straws instead!</p>
      <br> </br>
      <a href = "https://www.amazon.com/s?k=steel+straws&ref=nb_sb_noss_1"> <button  class="learnmore"> Shop Steel Straws </button>
      </a>
      <br> </br>
      <a href = "https://www.amazon.com/s?k=silicone+straws&ref=nb_sb_noss_2"> </a> <button  
      class="learnmore"> Shop Silicone Straws </button>
      
    </section>`);
  }
  if (document.getElementById("vegetarian").checked == true){
    console.log("Vegetarian is checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Cutting Down on Meat Consumption</h1>
      <img class="post" src="https://images.immediate.co.uk/production/volatile/sites/2/2016/08/25471.jpg?quality=90&resize=620,413"  alt="vegetarian"></img>
      <h4>How Does This Make A Difference?</h4> 
      <p class = explanation>Cows and other livestock kept for human consumption cause 37% of total human-related methane emissions and 65% of human-related nitrous oxide emissions. These are both greenhouse gases which contribute to global warming. By cutting down on your meat consumption, you're also cutting down on greenhouse gas emissions. You don't even have to go fully vegetarian - every little bit counts!</p>
      <h4>Easy Vegetarian Meals</h4>
      <p class = explanation>Check out these delicious and simple vegetarian recipes.</p>
      <br> </br>
      <a href = "https://www.cookinglight.com/food/vegetarian/simple-vegetarian-recipes"> <button  class="learnmore"> Check It Out </button>
      </a>
    </section>`);
  } 
  if (document.getElementById("grocery").checked == true){
    console.log("Grocery is checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Reusable Bags</h1>
      <img class="post" src="https://manofmany.com/wp-content/uploads/2019/11/Woolworths-Reusable-Shopping-Bags.jpg"  alt="reusable bags">
      <h4>Why Choose to Reuse?</h4> 
      <p class = explanation>When you throw a plastic grocery bag away, that bag could be making its way to the ocean, where it poses a grave threat to sea life. This threat is made even greater by the fact that each plastic bag is thrown out after just one use. By choosing reusable grocery bags instead of plastic ones, you could be helping to save not only a life, but an entire ecosystem.</p>
      <h4>Where Can I Find Reusable Bags?</h4>
      <p class = explanation>You can simply use a tote bag that you find around the house, or you can check out these fun reusable grocery bags on Amazon.</p>
      <br> </br>
      <a href = "https://www.amazon.com/s?k=reusable+grocery+bags&ref=nb_sb_noss_2"> <button  class="learnmore"> Check It Out </button>
      </a>
    </section>`);
  } 
  if (document.getElementById("bike").checked == true){
    console.log("Bike is checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Biking and Walking</h1>
      <img src="https://lh3.googleusercontent.com/proxy/mINM7ZVR3v_koZuxLXLDCMd7FQ-vwLsSn-eV9FLM8j7AqY1EwuXIbgLK9_rRHe3Fl7eUyEi-6hzt28DBW67fvJUJ_kT8gkOiJ7UWyJXjdamS6_0siz2abyP5aXjtQ7bX8SWfp2IOS51arXZOZQ" class="post"alt="biking"></img>
      <h4>How Does This Make A Difference?</h4> 
      <p class = explanation>Cars are a major source of carbon dioxide emission, mainly because they burn fossil fuels (gasoline) in order to go. We are highly dependent on cars in our daily lives, and it is often difficult to take an alternative such as biking or walking. However, you don't have to stop driving completely to make an impact - even the smallest actions make a difference!</p>
      <h4>How Long Does It Take?</h4>
      <p class = explanation>Check out Google Maps to find out how long it will take you to reach your destination on foot or on bike.</p>
      <br> </br>
      <a href = "https://www.google.com/maps"> <button  class="learnmore"> Check It Out </button>
      </a>
    </section>`);
  } 
  if (document.getElementById("showers").checked == true){
    console.log("Showers are checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Shortening your Showers</h1>
      <img src="https://secure.img1-fg.wfcdn.com/im/27978350/compr-r85/1134/113453122/ashlyn-pressure-balance-tub-and-shower-faucet-trim-kit-with-in2ition-shower.jpg" class="post"alt="shower"></img>
      <h4>How Does This Make A Difference?</h4> 
      <p class = explanation>By shortening your showers, you not only conserve water, you also conserve the energy used to heat the water. Energy is produced from burning fossil fuels, which releases pollutants that contribute global warming. Luckily, shortening your showers is a very simple way to help counteract this! You can also help by conserving water in other ways - turning off the sink while you brush your teeth or shaving, patching up any leaks in pipes/faucets, or even purchasing a water-saving showerhead or faucet.</p>
      <h4>Keeping Track of Time</h4>
      <p class = explanation>Check out these handy waterproof timers to help you manage your time in the shower.</p>
      <br> </br>
      <a href = "https://www.amazon.com/s?k=shower+timer&crid=1QAV0HOJ36GVE&sprefix=shower+timer%2Caps%2C159&ref=nb_sb_ss_i_1_12"> <button  class="learnmore"> Shop Shower Timers </button>
      </a>
    </section>`);
  } 
  
  if (document.getElementById("carpool").checked == true){
    console.log("Carpool is checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Starting a Carpool</h1>
      <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1161159565%2F960x0.jpg%3Ffit%3Dscale" class="post"alt="carpool"></img>
      <h4>How Does This Make A Difference?</h4> 
      <p class = explanation>Cars are a major source of carbon dioxide emission, mainly because they burn fossil fuels (gasoline) in order to go. However, by having a group of people take one car instead of everyone using their own, you can help cut down on cars' carbon footprint. Invite your friends to carpool with you to school, work, or events with you, and let them know that they are making a difference for the environment! If you can't form a carpool group, you could use <b> public transit </b> instead.</p>
    </section>`);
  } 
  if (document.getElementById("litter").checked == true){
    console.log("Litter is checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Cleaning Up Litter</h1>
      <img src = "https://www.chinadaily.com.cn/photo/images/attachement/jpg/site1/20110418/0013729e48090f16193b24.jpg" class = "post" alt="litter"></img>
      <h4>How Does This Make A Difference?</h4> 
      <p class = explanation>Believe it or not, litter can contribute to global warming. When biodegradable litter rots, it releases carbon dioxide and methane, both of which are greenhouse gases. These gases trap heat in the atmosphere, contributing to global warming. Additionally, litter could be ingested by animals, killing them off and harming the food chain and ecosystem.</p>
      <h4>How to Get Involved</h4>
      <p class = explanation>Whether you organize a cleanup with your friends or community or just pick up litter that you see on a walk, you are making a difference!</p>
    </section>`);
  } 
  if (document.getElementById("trees").checked == true){
    console.log("Trees are checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Planting a Tree</h1>
      <img src="https://www.smallfootprintfamily.com/wp-content/uploads/why-plant-a-tree.jpg" class="post"alt="trees"></img>
      <h4>How Does This Make A Difference?</h4> 
      <p class = explanation>Trees (and all plants!) need carbon dioxide in order to perform photosynthesis, meaning that they can help counteract your carbon footprint by absorbing carbon dioxide from the air. Unfortunately, deforestation is wiping out trees across the planet, meaning that there are not enough to balance out with our carbon emissions. However, you can make an impact by planting your own trees, right from home!</p>
      <h4>How to Plant a Tree</h4>
      <p class = explanation>Not sure where to start? Check out this guide on how to plant a tree.</p>
      <br> </br>
      <a href = "https://www.treesaregood.org/treeowner/plantingatree"> <button  class="learnmore"> Learn More </button>
      </a>
    </section>`);
  } 
  if (document.getElementById("waterbottles").checked == true){
    console.log("Waterbottles are checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Switching to Reusable Water Bottles</h1>
      <img src="https://static.seattletimes.com/wp-content/uploads/2019/09/bottles_0927-780x641.jpg" class="post"alt="waterbottles"></img>
      <h4>Why Choose to Reuse?</h4> 
      <p class = explanation>When you throw a plastic water bottle away, that bottle could be making its way to the ocean, where it poses a grave threat to sea life. This threat is made even greater by the fact that each plastic water bottle is thrown out after just one use. By choosing reusable grocery bags instead of plastic ones, you could be helping to save not only a life, but an entire ecosystem.</p>
      <h4>Where Can I Find Reusable Water Bottles?</h4>
      <p class = explanation>Check out these reusable bottles on Amazon.</p>
      <br> </br>
      <a href = "https://www.amazon.com/s?k=reusable+water+bottle&crid=UY82PL4AYQB2&sprefix=reusable+water%2Caps%2C191&ref=nb_sb_ss_i_1_14"> <button  class="learnmore"> Shop Reusable Water Bottles </button>
      </a>
    </section>`);
  } 
  if (document.getElementById("lightbulbs").checked == true){
    console.log("Lightbulbs are checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Energy-Efficient Lightbulbs</h1>
      <img src="https://www.advanced-ins.com/images/news/29670/7216/large/AISAdobeStock_81528692.jpg?1486588359" class="post"alt="lightbulbs"></img>
      <h4>How Does This Make A Difference?</h4> 
      <p class = explanation> The energy used to power lighbulbs is produced from burning fossil fuels, which releases pollutants that contribute global warming. By using energy-efficient lightbulbs, you can help reduce the amount of energy that needs to be produced, helping to fight back against global warming!</p>
      <h4>Where Can I Find Energy-Efficient Lightbulbs</h4>
      <p class = explanation>You may be able to find LED or CFL bulbs at your local hardware store, or you can check out these on Amazon.</p>
      <br> </br>
      <a href = "https://www.amazon.com/s?k=led+lightbulbs&ref=nb_sb_noss_2"> <button  class="learnmore"> Shop LED Lightbulbs </button>
      </a>
      <br> </br>
      <a href = "https://www.amazon.com/s?k=compact+fluorescent+lightbulbs&ref=nb_sb_noss"> <button  class="learnmore"> Shop CFL Lightbulbs </button>
      </a>
    </section>`);
  } 
  if (document.getElementById("recycle").checked == true){
    console.log("Recycle is checked.");
    infoCardContainer.append(`<section class = "card">  
      <h1>Recycling</h1>
      <img src="https://www.greenamerica.org/sites/default/files/2018-11/kids%20recycling%20%28istock%29.jpg" class="post"alt="recycle"></img>
      <h4>How Does This Make a Difference?</h4> 
      <p class = explanation>Recycling helps the environment not only by reducing the amount of trash in landfills, but also by reducing the need for more resources. For example, when you recycle paper, you won't need to cut down more trees to make new paper. Additionally, using recycled materials in manufacturing saves energy as it is no longer needed to collect the raw materials, so recycling can help combat global warming as well.</p>
      <h4>What Can I Recycle?</h4>
      <p class = explanation>Not sure what to recycle? Check out this handy guide.</p>
      <br> </br>
      <a href = "https://recyclingsimplified.com/recycling-basics/"> <  class="learnmore"> Check It Out </button>
      </a>
    </section>`);
  }
}