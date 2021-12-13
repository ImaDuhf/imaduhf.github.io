

/* Det här ska in när man klickar på knappen och bort när man klickar på den igen eller en annan knapp
<div class="col border border-dark border-2">
    <p class="album-info-text mt-4 ms-2">2 Cool 4 Skool Album</p>
</div>
*/

var skool = document.getElementById("2cool4skool")
var oaul = document.getElementById("orul82")
var skooldiv = document.getElementById("div2cool4skool")
var oauldiv = document.getElementById("divorul82")


function openInfo(num) {
    if (num == 1) {
        skool.hidden = false;
        skooldiv.innerHTML = '<button class="album-title-text" onclick="openInfo(001)">2 Cool 4 Skool</button>'
        console.log("1")
    }
    else if (num == 001) {
        skool.hidden = true;
        skooldiv.innerHTML = '<button class="album-title-text" onclick="openInfo(1)">2 Cool 4 Skool</button>'
        console.log("001")
    }

    if (num == 2) {
        oaul.hidden = false;
        oauldiv.innerHTML = '<button class="album-title-text" onclick="openInfo(002)">O!RUL8,2?</button>'
        console.log("2")
    }
    else if (num == 002) {
        oaul.hidden = true;
        oauldiv.innerHTML = '<button class="album-title-text" onclick="openInfo(2)">O!RUL8,2?</button>'
        console.log("002")
    }
}