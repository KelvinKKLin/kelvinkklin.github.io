// When the user clicks on "View Certificate" in the About section, open the corresponding Awards collapsible.
if(window.location.hash == "#professional-awards"){
    $("#professional-awards").collapse("show");
} else if(window.location.hash == "#programming-competition-awards"){
    $("#programming-competition-awards").collapse("show");
} else if (window.location.hash == "#licenses-certifications"){
    $("#licenses-certifications").collapse("show");
}