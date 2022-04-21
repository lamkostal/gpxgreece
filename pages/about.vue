<template>
  <div class="wrapper"> 
  <header class="head">
      <section aria-label="hero" class="hero top-section">
        <img src="~/assets/img/about-header-img.jpg" alt="" class="hero_img" />
        
      </section>
    </header>
  <main >
    
 <section class="about-section">

 
      <div class="text-container">
          <h1>Σχετικά</h1>
          <p>Η GPX είναι η μάρκα μοτοσυκλετών με έδρα την Ταϊλάνδη. Στα εργοστάσιά της γίνεται έρευνα, ανάπτυξη και κατασκευή προϊόντων καλής ποιότητας σε λογικές τιμές.
    </p>
    <h2>Ιστορία</h2>
    <p>Ιδρύεται το 2007, με ένα μικρό εργοστάσιο 150 τ.μ. αρχικά για την παράγωγή και να αποθήκευση ATV για την αγορά της Ταϊλάνδης.
    </p>
    <p>Γρήγορα εξαπλώθηκε και το 2010 άνοιξε και δεύτερο εργοστάσιο 4,800 τ.μ.
    </p>
    <p>Το 2011 συμμετέχει για πρώτη φορά στο Τhailand Motor show.
    </p>
    <p>Nέα επενδυτικά κεφάλαια φέρνουν την ανάπτυξη και τρίτου εργοστασίου 16,000 τ.μ. και νέου showroom. Επίσης, ανοίγει περισσότερα από 90 κέντρα εξυπηρέτησης στην Ταϊλάνδη.
    </p>
    <p>Το 2016 και στην έκθεση Τhailand Motor show κατέλαβε τη 1η θέση στις προκρατήσεις (1.109 μονάδες).</p>
    <p>To 2018 με νέες επενδύσεις μετακομίζει στο ολοκαίνουριο εργοστάσιο 35,000 τ.μ για να ανταποκριθεί στην αυξανόμενη ζήτηση από διάφορες χώρες του κόσμου.
    </p>
    <p>Εξάγει σε 10 χώρες στην Ασία, η Ελλάδα είναι η πρώτη ευρωπαϊκή χώρα στην οποία θα λανσαριστούν τα προϊόντα της GPX.
    </p>
      </div>

 
 </section>
   
  </main>
</div>
</template>

<script>
export default {
  transition: 'fade',

}
</script>

<style scoped>

.about-section{
  padding-top: 4rem ;
  background:linear-gradient(var(--gray-0) 30%,var(--gray-5));

}


.text-container{
  max-width: 70ch;
  margin-inline: auto;
  font-size: var(--font-size-2);
  line-height: 1.6;
  mix-blend-mode:multiply;
}

</style>