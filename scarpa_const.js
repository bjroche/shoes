

exports.getWelcome = function(wlang) {
  switch(wlang) {
    case 'en':
        return 'Welcome to La Bella Scarpa';
        break;
    case 'fr':
        return 'French: Welcome to La Bella Scarpa';
        break;
    case 'de':
        return 'German: Welcome to La Bella Scarpa';
        break;
    case 'it':
        return 'Benvenuti a La Bella Scarpa';
        break;
    case 'es':
        return 'Spanish: Welcome to La Bella Scarpa';
        break;

    default:
        return 'Welcome to La Bella Scarpa';
}

};


exports.gethomePara1 = function(wlang) {
switch(wlang) {
    case 'en':
        return 'La Bella Scarpa shoes have been synonymous with quality shoemaking since for over 120 years.';
        break;
    case 'fr':
        return 'French: Welcome to La Bella Scarpa';
        break;
    case 'de':
        return 'German: Welcome to La Bella Scarpa';
        break;
    case 'it':
        return 'Da oltre 120 anni le calzature de La Bella Scarpa sono sinonimo di qualità. La nostra è una attività a conduzione familiare con sede in Provenza nelle vicinanze di Romarins. ';
        break;
    case 'es':
        return 'Spanish: Welcome to La Bella Scarpa';
        break;

    default:
        return 'La Bella Scarpa shoes have been synonymous with quality shoemaking since for over 120 years.';
}
  
};



exports.gethomePara2 = function() {
switch(wlang) {
    case 'en':
  return 'Over four generations we have acquired an enviable reputation for the most excellent made to order service, enabling our clients to compliment their wardrobe with the vast range of styles we offer for every occasion.';
        break;
    case 'fr':
        return 'French: Welcome to La Bella Scarpa';
        break;
    case 'de':
        return 'German: Welcome to La Bella Scarpa';
        break;
    case 'it':
        return 'Da oltre 120 anni le calzature de La Bella Scarpa sono sinonimo di qualità. La nostra è una attività a conduzione familiare con sede in Provenza nelle vicinanze di Romarins. ';
        break;
    case 'es':
        return 'Spanish: Welcome to La Bella Scarpa';
        break;

    default:
  return 'Over four generations we have acquired an enviable reputation for the most excellent made to order service, enabling our clients to compliment their wardrobe with the vast range of styles we offer for every occasion.';
}




};

exports.gethomePara3 = function() {
  return 'At La Bella Scarpa we are constantly striving to improve the service we provide for our global clientele, which includes a full refurbishment service ranging from a full re-sole and re-heel to a simple refinishing of edges and uppers.';
};

exports.gethomePara4 = function() {
  return 'We offer private label development work in addition to our ranges.';
};
