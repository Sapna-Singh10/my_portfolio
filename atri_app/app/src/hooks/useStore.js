import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Div6": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Div8": {
      "callbacks": {}
    },
    "Flex23": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "Flex27": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Div27": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Div28": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Div30": {
      "callbacks": {}
    },
    "Div31": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Div32": {
      "callbacks": {}
    },
    "TextBox13": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Mahatma Jyotiba Phule Rohilkhand University, IET Bareilly Uttarpradesh, India "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Purshing B.tech from Mjpru , Bareilly, Uttarpradesh."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "I have passed my high school examination from CBSE affiliation in year 2019."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "I have passed my intermediate examination from CBSE affiliation in year 2021."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/th.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/good-faces-2eC_-0yRrGU-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "Hi! I am Sapna Singh"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "currently pursuing engineering with CSIT specialization"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "Personal info"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "My Skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "HTML"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Slider4": {
      "custom": {
        "minValue": 0,
        "maxValue": 100,
        "value": 90
      },
      "callbacks": {}
    },
    "Slider14": {
      "custom": {
        "minValue": 0,
        "maxValue": 100,
        "value": 93
      },
      "callbacks": {}
    },
    "TextBox38": {
      "custom": {
        "text": "Java"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": "C++"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Slider15": {
      "custom": {
        "minValue": 0,
        "maxValue": 100,
        "value": 78
      },
      "callbacks": {}
    },
    "TextBox28": {
      "custom": {
        "text": "CSS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Slider6": {
      "custom": {
        "minValue": 0,
        "maxValue": 100,
        "value": 90
      },
      "callbacks": {}
    },
    "TextBox37": {
      "custom": {
        "text": "Javascript"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Slider13": {
      "custom": {
        "minValue": 0,
        "maxValue": 100,
        "value": 94
      },
      "callbacks": {}
    },
    "TextBox40": {
      "custom": {
        "text": "@2022, portfolio by Sapna singh"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
