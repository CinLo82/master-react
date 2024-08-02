export const JuegoReducer = (state=[], action) => {
    switch (action.type) {
        case 'AGREGAR_JUEGO':
            return [...state, action.payload];
            case 'EDITAR_JUEGO':
                let indice = state.findIndex(juego => juego.id === action.payload.id)
                state[indice] = action.payload;
                return [...state];
        case 'BORRAR_JUEGO':
            return state.filter(juego => juego.id !== action.payload);
        default:
            return state;
    }
}
