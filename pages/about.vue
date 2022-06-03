<template>
  <div class="wrapper"> 
  <header class="head">
      <section aria-label="hero" class="hero top-section">
        <div class="opaque"></div>
        <img src="~/assets/img/about-header-img.jpg" alt="" class="hero_img" />
        
      </section>
    </header>
  <main >
    
 <section class="about-section">
 
      <div class="text-container">
        <h1>Σχετικά</h1>
          <p>Η GPX είναι ο μεγαλύτερος κατασκευαστής δικύκλων της Ταϊλάνδης. Στα εργοστάσιά της γίνεται έρευνα, σχεδίαση και κατασκευή προϊόντων υψηλής ποιότητας σε ανταγωνιστικές τιμές.
    </p>
      </div>
        
<div class="img-container"><div><img src="~/assets/img/about/about-1.jpg" alt=""></div></div>
    <div class="text-container">
    <h2>Ιστορία</h2>
    <p>Ίδρυση το 2007. Ξεκινά σε ένα μικρό εργοστάσιο 150 τ.μ. αρχικά για την παράγωγή και να αποθήκευση ATV για την αγορά της Ταϊλάνδης.
    </p>

    <p>Γρήγορα επεκτείνεται και το 2010 ανοίγει και δεύτερο εργοστάσιο 4,800 τ.μ.
    </p>
    </div>
    
<div class="img-container">
  <div><img src="~/assets/img/about/about-2-1.jpg" alt=""></div>
<div>  <img src="~/assets/img/about/about-2-2.jpg" alt=""></div>
</div>
  <div class="text-container">
  <p>Το 2011 συμμετέχει για πρώτη φορά στο Τhailand Motor show.
    </p>
    <p>Nέα επενδυτικά κεφάλαια φέρνουν την ανάπτυξη και τρίτου εργοστασίου 16,000 τ.μ. και νέου showroom. Επίσης, ανοίγει περισσότερα από 90 κέντρα εξυπηρέτησης στην Ταϊλάνδη.
    </p>
  </div>
  <div class="img-container">
   <div> <img src="~/assets/img/about/about-3-1.jpg" alt=""></div>
    <div><img src="~/assets/img/about/about-3-2.jpg" alt=""></div>
    <div><img src="~/assets/img/about/about-3-3.jpg" alt=""></div>
  </div>

    <div class="text-container">
    <p>Το 2016 και στην έκθεση Τhailand Motor show καταλαμβάνει τη 1η θέση στις προκρατήσεις μοτοσυκλετών.</p>
    <p>To 2018 και με νέες επενδύσεις μετακομίζει στο ολοκαίνουριο εργοστάσιο 35,000 τ.μ για να ανταποκριθεί στην αυξανόμενη ζήτηση από διάφορες χώρες του κόσμου.
    </p>
    <p>Διαθέτει ομάδα μηχανικών και σχεδιαστών με πάνω από 15 χρόνια εμπειρίας στον τομέα
σχεδιασμού δικύκλων</p>
    </div>
  <div class="img-container">
    <div><img src="~/assets/img/about/about-4-1.jpg" alt=""></div>
    <div><img src="~/assets/img/about/about-4-2.jpg" alt=""></div>
    <div><img src="~/assets/img/about/about-4-3.jpg" alt=""></div>
  </div>
    <div class="text-container">
    <p>Σήμερα εξάγει τις μοτοσυκλέτες σε 10 χώρες στην Ασία, η Ελλάδα είναι η πρώτη ευρωπαϊκή χώρα στην οποία θα λανσαριστούν τα προϊόντα της GPX μέσω της αποκλειστικής αντιπροσώπου KSR Hellas.
    </p>
    </div>
    
      

 
 </section>
   
  </main>
</div>
</template>

<script>
export default {
  transition: 'fade',
mounted(){
  var aboutImgs = gsap.utils.toArray('.img-container');

    aboutImgs.forEach((img) => {
      gsap.from(img, {
        autoAlpha: 0,
        duration:1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: img,
          start: "center bottom",
          // end: "+=500",
          // markers: true,
        },
      });
    });
}
}
</script>

<style scoped>
.hero{
  position: relative;
}
.hero img{
  height:80vh
}
.opaque{
  position: absolute;
  background-image: linear-gradient(180deg,transparent,90%,var(--gray-0));
  width:100%;
  height: 100%;
  z-index: 10;
}
.about-section{
  padding-top: 4rem ;
  background:linear-gradient(var(--gray-0) 30%,var(--gray-5));
}
.text-container{
  max-width: 90ch;
  margin-inline: auto;
  font-size: var(--font-size-2);
  line-height: 1.6;
  mix-blend-mode:multiply;
  padding-inline:1rem;
}
p{
  margin-block: 1.5rem;
}
.img-container{
  display:flex;
  flex-wrap:wrap;
  max-width:100%;
  justify-content:center;
  padding-bottom:2rem;
  gap: 1rem;
}
.img-container div{
 /* flex:0 0 500px; */
 height:350px;
 overflow:hidden;
 
   
}
.img-container div img{
 object-fit: cover;
 width:500px;
 height:400px;
}



</style>