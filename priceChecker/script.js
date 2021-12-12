let price = 0;

setTimeout(function(){
    window.open('mailto:sales@blackrabbitdigtal.ie?subject=Online Quote&body=I have recieved a quote on your website for ');
}, 500); 

function servicesCalculate() {
    const name = document.getElementById('name');
    const  email = document.getElementById('email');
    const  enquiry = document.getElementById('enquiry');
    const  numWebPages = document.getElementById('num-web-pages').value;
    const  seo = document.getElementById('seo');
    const  graphicDesign = document.getElementById('graphic-design');
    const  googleAds= document.getElementById('google-ads');
    const  socialMediaPosts = document.getElementById('social-media-posts');
    const  ecommerce = document.getElementById('ecommerce');
    const  support = document.getElementById('support');

    price += numWebPages * 20;
    if(seo.checked == true) {
        price += (numWebPages*5);
    }
    if(graphicDesign.checked == true) {
        price += (numWebPages*5);
    }
    if(googleAds.checked == true) {
        price += (numWebPages*10);
    }
    if(socialMediaPosts.checked == true) {
        price += (numWebPages*2);
    }
    if(ecommerce.checked == true) {
        price += (numWebPages*15);
    }
    if(support.checked == true) {
        price += (numWebPages*10);
    }
    //output
    document.getElementById("message").innerHTML = "Your Website will cost €" + price;
}

function sendEmail(){
    window.open('mailto:sales@blackrabbitdigtal.ie?subject=Online Quote&body=I have recieved a quote on your website for ');

}
