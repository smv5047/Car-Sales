import { ADD_FEATURE, REMOVE_FEATURE} from "../actions/total" 

export const initialState = {
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
    , 
    additionalPrice: 0
  };


export function reducer( state=initialState,  action) {
    switch(action.type){
        case ADD_FEATURE:
            return {
                ...state,
                car:{
                    ...state.car,
                price: state.car.price + action.payload.price,
                features: [...state.car.features, action.payload]
                }
            };
        case REMOVE_FEATURE:
            let newFeatures = [...state.car.features]
            newFeatures.splice(state.car.features.indexOf(action.payload.feature), 1);
            return {
                ...state,
                car:{
                    ...state.car,
                    price: state.car.price - action.payload.price,
                    features: [newFeatures]
                },
            }
        // case "UPDATE_TOTAL":
        //     return {
        //         ...state,
        //         state.car.price
        //     }
        default:
            return state;
    }   
 }