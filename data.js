const mountains = [
    {
        name: "Olympus Mons",
        planet: "Mars",
        height: "21,9 km",
        image: "olympus-mons.jpg",
        desc: `
Olympus Mons adalah gunung berapi terbesar dan tertinggi di tata surya, terletak di planet Mars. Tingginya mencapai sekitar 21,9 kilometer—hampir tiga kali lipat tinggi Gunung Everest! Diameter dasarnya sekitar 600 km, lebih luas dari negara bagian Arizona di Amerika Serikat. Olympus Mons adalah gunung berapi perisai, terbentuk dari aliran lava yang lambat dan luas selama jutaan tahun. Lerengnya sangat landai, hanya sekitar 5°, sehingga meskipun sangat tinggi, pendakiannya terasa gradual. Kaldera di puncaknya sangat besar, berdiameter sekitar 80 km. Kondisi gravitasi Mars yang lebih rendah dan kurangnya lempeng tektonik memungkinkan gunung ini tumbuh sangat besar.
        `
    },
    {
        name: "Maxwell Montes",
        planet: "Venus",
        height: "11 km",
        image: "maxwell-montes.jpg",
        desc: `
Maxwell Montes merupakan pegunungan tertinggi di Venus, dengan puncak tertingginya mencapai sekitar 11 kilometer di atas permukaan rata-rata Venus. Nama Maxwell Montes diambil dari James Clerk Maxwell, seorang fisikawan terkenal. Berbeda dengan gunung di Bumi yang terbentuk terutama karena aktivitas vulkanik, Maxwell Montes terbentuk akibat tekanan dan tumbukan lempeng tektonik Venus yang sangat ekstrem. Permukaan Venus yang panas dan bertekanan tinggi membuat gunung ini sulit dieksplorasi secara langsung, namun radar misi luar angkasa telah memetakan detailnya. Daerah di sekitar Maxwell Montes juga tertutup zat reflektif yang diperkirakan adalah 'salju' logam, kemungkinan pirit (emas palsu) atau galena.
        `
    },
    {
        name: "Rheasilvia Mons",
        planet: "Asteroid Vesta",
        height: "22 km",
        image: "rheasilvea-mons.jpg",
        desc: `
Rheasilvia Mons adalah gunung besar yang terletak di pusat kawah Rheasilvia di asteroid Vesta. Tingginya mencapai 22 kilometer dari dasar kawah, menjadikannya salah satu gunung tertinggi di tata surya. Rheasilvia sendiri adalah kawah raksasa hasil tabrakan asteroid besar dengan Vesta sekitar satu miliar tahun lalu. Tabarakan ini menciptakan puncak tengah (central peak) yang menjulang tinggi. Struktur Rheasilvia Mons dan kawah di sekitarnya memberikan banyak informasi tentang sejarah tabrakan dan proses geologis di benda kecil tata surya seperti asteroid.
        `
    },
    {
        name: "Boösaule Montes",
        planet: "Io (bulan Jupiter)",
        height: "17,5 km",
        image: "boosaule-montes.jpg",
        desc: `
Boösaule Montes adalah gunung tertinggi di Io, salah satu bulan Jupiter yang terkenal sangat aktif secara vulkanik. Tinggi Boösaule Montes mencapai sekitar 17,5 kilometer. Uniknya, gunung di Io terbentuk bukan karena aktivitas vulkanik, melainkan akibat kerak bulan yang pecah dan terangkat akibat tekanan internal yang sangat besar. Permukaannya dipenuhi lembah dan tebing curam, menandakan aktivitas geologi yang kompleks. Io sendiri memiliki lebih banyak gunung tinggi dibandingkan Bumi, berkat aktivitas internal yang sangat ekstrem akibat tarikan gravitasi Jupiter.
        `
    },
    {
        name: "Arsia Mons",
        planet: "Mars",
        height: "20 km",
        image: "arsia-mons.jpg",
        desc: `
Arsia Mons adalah salah satu dari tiga gunung berapi raksasa di kawasan Tharsis, Mars. Gunung ini memiliki ketinggian sekitar 20 kilometer dan diameter kawah puncaknya sekitar 110 km. Arsia Mons dikenal dengan kawah puncak yang besar dan dalam, serta lereng yang panjang dan landai. Bukti geologis menunjukkan bahwa Arsia Mons pernah sangat aktif, dan letusan terakhirnya mungkin terjadi sekitar 50 juta tahun lalu—terbilang muda dalam skala geologi Mars. Lerengnya juga menunjukkan tanda-tanda aliran lava dan longsoran besar.
        `
    },
    {
        name: "Equatorial Ridge",
        planet: "Iapetus (bulan Saturnus)",
        height: "20 km",
        image: "equatorial-ridge.jpg",
        desc: `
Equatorial Ridge adalah struktur unik di sepanjang ekuator Iapetus, salah satu bulan Saturnus. Struktur ini menyerupai pegunungan yang menjulang setinggi 20 kilometer di atas permukaan sekitar. Ridge ini membentang sepanjang lebih dari 1.300 km, membelah Iapetus menjadi dua hemisfer. Asal mula struktur ini masih menjadi misteri. Ada hipotesis bahwa ridge terbentuk dari material es yang menumpuk di ekuator, atau sisa dari cincin purba yang pernah mengelilingi Iapetus dan kemudian jatuh kembali ke permukaan. Ridge ini menjadikan Iapetus salah satu objek paling aneh di tata surya.
        `
    }
];

const references = `
    <h2>Daftar Pustaka / Referensi</h2>
    <ol>
        <li>NASA Solar System Exploration. <a href="https://solarsystem.nasa.gov/">https://solarsystem.nasa.gov/</a></li>
        <li>NASA Jet Propulsion Laboratory. (2021). Olympus Mons - Mars Exploration Program. <a href="https://mars.nasa.gov/">https://mars.nasa.gov/</a></li>
        <li>Wikipedia contributors. "Olympus Mons." <a href="https://en.wikipedia.org/wiki/Olympus_Mons">https://en.wikipedia.org/wiki/Olympus_Mons</a></li>
        <li>Blewett, D. T., et al. (2013). The Geology of Maxwell Montes and Lakshmi Planum, Venus. <i>Journal of Geophysical Research: Planets, 118(9), 1575–1588.</i> <a href="https://doi.org/10.1002/jgre.20114">https://doi.org/10.1002/jgre.20114</a></li>
        <li>Garvin, J. B., et al. (2000). Topographic evidence for geologically recent near-polar volcanism on Mars. <i>Icarus, 145(2), 648–652.</i> <a href="https://doi.org/10.1006/icar.2000.6383">https://doi.org/10.1006/icar.2000.6383</a></li>
        <li>Jaumann, R., et al. (2012). The surface of Vesta: Observations with Dawn Framing Camera. <i>Science, 336(6082), 687–690.</i> <a href="https://doi.org/10.1126/science.1219240">https://doi.org/10.1126/science.1219240</a></li>
        <li>Lopes, R. M. C., & Spencer, J. R. (2007). Io After Galileo: A New View of Jupiter’s Volcanic Moon. Springer Praxis Books.</li>
        <li>McEwen, A. S., et al. (2000). Active volcanism on Io: Global distribution and variations in activity. <i>Icarus, 142(2), 276–298.</i> <a href="https://doi.org/10.1006/icar.1999.6196">https://doi.org/10.1006/icar.1999.6196</a></li>
        <li>Plescia, J. B. (2004). Morphometric properties of Martian volcanoes. <i>Journal of Geophysical Research: Planets, 109, E03003.</i> <a href="https://doi.org/10.1029/2002JE002031">https://doi.org/10.1029/2002JE002031</a></li>
        <li>Moore, J. M., et al. (2007). The misfit equatorial ridge of Iapetus: A possible explanation. <i>Icarus, 190(1), 260–273.</i> <a href="https://doi.org/10.1016/j.icarus.2007.03.030">https://doi.org/10.1016/j.icarus.2007.03.030</a></li>
        <li>Schenk, P., & Moore, J. M. (1995). Volcanic constructs on Ganymede and Iapetus. <i>Geophysical Research Letters, 22(8), 1029–1032.</i> <a href="https://doi.org/10.1029/95GL00877">https://doi.org/10.1029/95GL00877</a></li>
        <li>Williams, D. A., et al. (2014). The Volcanology of Arsia Mons, Mars: New Perspectives from the Mars Express HRSC. <i>Journal of Volcanology and Geothermal Research, 276, 67–78.</i> <a href="https://doi.org/10.1016/j.jvolgeores.2014.02.010">https://doi.org/10.1016/j.jvolgeores.2014.02.010</a></li>
    </ol>
`;

function renderMountains() {
    const container = document.getElementById('mountains-list');
    mountains.forEach((m) => {
        const card = document.createElement('div');
        card.className = 'mountain-card';
        card.innerHTML = `
            <img src="${m.image}" alt="${m.name}">
            <h2>${m.name}</h2>
            <p><strong>Planet/Objek:</strong> ${m.planet}</p>
            <p><strong>Tinggi:</strong> ${m.height}</p>
            <p>${m.desc}</p>
        `;
        container.appendChild(card);
    });
}

function renderReferences() {
    const container = document.getElementById('references');
    if (container) {
        container.innerHTML = references;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMountains();
    renderReferences();
});
