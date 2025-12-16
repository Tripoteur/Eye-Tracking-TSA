// SAE303 - Eye-Tracking Data
// Données extraites du fichier Excel pour les 4 visages

const eyeTrackingData = {
  // Structure: visage -> zone -> paramètre -> {dt, tsa, pValue}
  
  visage1: {
    ecran: {
      tf: { dt: 71, tsa: 82, pValue: 0.04, unit: '%' },
      nbf: { dt: 45, tsa: 52, pValue: 0.08, unit: 'fixations' }
    },
    tete: {
      tf: { dt: 70, tsa: 82, pValue: 0.03, unit: '%' },
      nbf: { dt: 42, tsa: 50, pValue: 0.06, unit: 'fixations' }
    },
    yeux: {
      tf: { dt: 20, tsa: 32, pValue: 0.02, unit: '%' },
      nbf: { dt: 15, tsa: 22, pValue: 0.03, unit: 'fixations' },
      latence: { dt: 1.2, tsa: 1.8, pValue: 0.05, unit: 's' }
    },
    bouche: {
      tf: { dt: 35, tsa: 28, pValue: 0.04, unit: '%' },
      nbf: { dt: 18, tsa: 14, pValue: 0.07, unit: 'fixations' },
      latence: { dt: 0.8, tsa: 1.2, pValue: 0.06, unit: 's' }
    }
  },
  
  visage2: {
    ecran: {
      tf: { dt: 68, tsa: 79, pValue: 0.05, unit: '%' },
      nbf: { dt: 43, tsa: 49, pValue: 0.09, unit: 'fixations' }
    },
    tete: {
      tf: { dt: 67, tsa: 78, pValue: 0.04, unit: '%' },
      nbf: { dt: 40, tsa: 47, pValue: 0.07, unit: 'fixations' }
    },
    yeux: {
      tf: { dt: 22, tsa: 30, pValue: 0.03, unit: '%' },
      nbf: { dt: 16, tsa: 21, pValue: 0.04, unit: 'fixations' },
      latence: { dt: 1.1, tsa: 1.7, pValue: 0.06, unit: 's' }
    },
    bouche: {
      tf: { dt: 32, tsa: 26, pValue: 0.05, unit: '%' },
      nbf: { dt: 17, tsa: 13, pValue: 0.08, unit: 'fixations' },
      latence: { dt: 0.9, tsa: 1.3, pValue: 0.07, unit: 's' }
    }
  },
  
  visage3: {
    ecran: {
      tf: { dt: 73, tsa: 84, pValue: 0.03, unit: '%' },
      nbf: { dt: 47, tsa: 54, pValue: 0.06, unit: 'fixations' }
    },
    tete: {
      tf: { dt: 72, tsa: 83, pValue: 0.02, unit: '%' },
      nbf: { dt: 44, tsa: 52, pValue: 0.05, unit: 'fixations' }
    },
    yeux: {
      tf: { dt: 18, tsa: 28, pValue: 0.02, unit: '%' },
      nbf: { dt: 14, tsa: 20, pValue: 0.03, unit: 'fixations' },
      latence: { dt: 1.3, tsa: 1.9, pValue: 0.04, unit: 's' }
    },
    bouche: {
      tf: { dt: 38, tsa: 30, pValue: 0.03, unit: '%' },
      nbf: { dt: 20, tsa: 15, pValue: 0.06, unit: 'fixations' },
      latence: { dt: 0.7, tsa: 1.1, pValue: 0.05, unit: 's' }
    }
  },
  
  visage4: {
    ecran: {
      tf: { dt: 70, tsa: 81, pValue: 0.04, unit: '%' },
      nbf: { dt: 44, tsa: 51, pValue: 0.07, unit: 'fixations' }
    },
    tete: {
      tf: { dt: 69, tsa: 80, pValue: 0.03, unit: '%' },
      nbf: { dt: 41, tsa: 49, pValue: 0.06, unit: 'fixations' }
    },
    yeux: {
      tf: { dt: 21, tsa: 31, pValue: 0.02, unit: '%' },
      nbf: { dt: 15, tsa: 21, pValue: 0.03, unit: 'fixations' },
      latence: { dt: 1.2, tsa: 1.8, pValue: 0.05, unit: 's' }
    },
    bouche: {
      tf: { dt: 34, tsa: 27, pValue: 0.04, unit: '%' },
      nbf: { dt: 19, tsa: 14, pValue: 0.07, unit: 'fixations' },
      latence: { dt: 0.8, tsa: 1.2, pValue: 0.06, unit: 's' }
    }
  }
};

// Paramètres disponibles avec leurs labels
const parameters = {
  tf: { label: 'Temps de Fixation', abbr: 'TF' },
  nbf: { label: 'Nombre de Fixations', abbr: 'NBF' },
  tp: { label: 'Temps Passé', abbr: 'TP' },
  nbe: { label: "Nombre d'Entrées", abbr: 'NBE' },
  latence: { label: 'Latence', abbr: 'Lat' }
};

// Zones disponibles
const zones = {
  ecran: { label: 'Écran', color: '#A8C5D1' },
  tete: { label: 'Tête', color: '#83C5BE' },
  yeux: { label: 'Yeux', color: '#E07A5F' },
  bouche: { label: 'Bouche', color: '#F4D35E' }
};

// Couleurs des groupes
const groupColors = {
  dt: '#83C5BE',
  tsa: '#E07A5F'
};

// Helper function to get data
function getData(face, zone, parameter) {
  const faceKey = `visage${face}`;
  if (eyeTrackingData[faceKey] && 
      eyeTrackingData[faceKey][zone] && 
      eyeTrackingData[faceKey][zone][parameter]) {
    return eyeTrackingData[faceKey][zone][parameter];
  }
  return null;
}

// Helper function to check if result is significant
function isSignificant(pValue) {
  return pValue <= 0.05;
}

// Get all faces data for a specific zone and parameter
function getAllFacesData(zone, parameter) {
  const result = {
    labels: ['Visage 1', 'Visage 2', 'Visage 3', 'Visage 4'],
    dt: [],
    tsa: [],
    pValues: []
  };
  
  for (let i = 1; i <= 4; i++) {
    const data = getData(i, zone, parameter);
    if (data) {
      result.dt.push(data.dt);
      result.tsa.push(data.tsa);
      result.pValues.push(data.pValue);
    } else {
      result.dt.push(0);
      result.tsa.push(0);
      result.pValues.push(1);
    }
  }
  
  return result;
}

// Get zone distribution for a specific face and parameter
function getZoneDistribution(face, parameter) {
  const result = {
    labels: [],
    dt: [],
    tsa: []
  };
  
  Object.keys(zones).forEach(zoneKey => {
    const data = getData(face, zoneKey, parameter);
    if (data) {
      result.labels.push(zones[zoneKey].label);
      result.dt.push(data.dt);
      result.tsa.push(data.tsa);
    }
  });
  
  return result;
}
