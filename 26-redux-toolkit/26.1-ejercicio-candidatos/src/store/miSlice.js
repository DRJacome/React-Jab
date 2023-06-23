import { createSlice } from '@reduxjs/toolkit'

export const miSlice = createSlice({
  name: "misTrabajadores",
  initialState: {
    trabajadores: []
  },
  reducers: {
    agregarUnValor: (state, action) => {
      state.trabajadores = [...state.trabajadores, action.payload]
    },
    modificarUnValor: (state, action) => {
      const { indice, nuevoContinente } = action.payload
      state.trabajadores[indice].departamento = nuevoContinente
    },
    eliminarUnValor: (state, action) => {
      const { nombre, apellido, telefono } = action.payload
      state.trabajadores = state.trabajadores.filter(valor =>
        valor.name.first !== nombre &&
        valor.name.last !== apellido &&
        valor.cell !== telefono)
    }
  }
});

export const departamentosSlice = createSlice({
  name: "misDepartamentos",
  initialState: {
    departamentos: ["África (ventas)", "América (Organización)", "América (Comercial)", "Asia (Distribución)", "Asia (Supervisión)", "Europa (Distribución)", "Europa (Marketing)", "Oceanía (Distribución)"]
  },
  reducers: {}
});

export const { agregarUnValor, modificarUnValor,eliminarUnValor } = miSlice.actions