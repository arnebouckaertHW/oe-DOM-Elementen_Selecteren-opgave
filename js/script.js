"use strict";

var txtId, txtCssSelector, txtNaam;
var btnVerbergElementMetId, btnVerbergElementMetSelector;
var divFeedback;

window.addEventListener('load',Initieer);

function Initieer(){
    KoppelDomElementen();
    KoppelEvents();
    ToonStandaardWaarden();
}

function KoppelDomElementen(){
    txtId = document.getElementById("txtId");
    txtNaam = document.getElementById("txtNaam");
    txtCssSelector = document.getElementById("txtCssSelector");
    btnVerbergElementMetId = document.getElementById("btnVerbergElementMetId");
    btnVerbergElementMetSelector = document.getElementById("btnVerbergElementMetSelector");
    divFeedback = document.getElementById("divFeedback");
}

function KoppelEvents(){
    btnVerbergElementMetId.addEventListener("click", ToonVerbergElementViaId);
    btnVerbergElementMetSelector.addEventListener("click", ToonVerbergElementViaSelector);
}

function ToonStandaardWaarden(){
    txtId.value = "txtNaam";
    txtCssSelector.value = "label";
}

function ToonVerbergElementViaId(){
    let gekozenId = txtId.value;
    // welk element moet worden gewijzigd
    let teWijzigenDomElement = document.getElementById(gekozenId);

    // wat is de huidige status vd zichtbaarheid
    let zichtbaarheid = teWijzigenDomElement.style.display;

    if (zichtbaarheid == "none") 
    {
        teWijzigenDomElement.style.display = "inline-block";
        divFeedback.innerHTML = `Daar is ie weer: ${gekozenId}`;
        btnVerbergElementMetId.innerHTML = "Verberg element met id";
    } 
    else 
    {
        teWijzigenDomElement.style.display = "none";
        divFeedback.innerHTML = `Je hebt het volgende element verborgen: ${gekozenId}`;
        btnVerbergElementMetId.innerHTML = "Toon element met id";
    }
}

function ToonVerbergElementViaSelector(){
    let gekozenSelector = txtCssSelector.value;
    // welk element moet worden gewijzigd
    let teWijzigenDomElement = document.querySelector(gekozenSelector);

    // wat is de huidige status vd zichtbaarheid
    let zichtbaarheid = teWijzigenDomElement.style.display;

    if (zichtbaarheid == "none") 
    {
        teWijzigenDomElement.style.display = "inline-block";
        divFeedback.innerHTML = `Daar is ie weer: ${gekozenSelector}`;
        btnVerbergElementMetSelector.innerHTML = `Verberg element met selector ${gekozenSelector}`;
    } 
    else 
    {
        teWijzigenDomElement.style.display = "none";
        divFeedback.innerHTML = `Je hebt het volgende element verborgen: ${gekozenSelector}`;
        btnVerbergElementMetSelector.innerHTML = "Toon element met selector";
    }
}


