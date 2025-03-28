'use client';
import { motion } from 'framer-motion';

const coatingLayers = [
  {
    label: 'Resina Éster Vinílica',
    color: 'bg-yellow-400',
    description: 'Espessura: 0.5mm',
  },
  {
    label: 'Véu Nexus Style',
    color: 'bg-orange-500',
    description: 'Espessura: 0.3mm',
  },
  {
    label: 'Manta 450g/m² de Fibra de Vidro',
    color: 'bg-green-600',
    description: 'Espessura: 2.0mm',
  },
  {
    label: 'Camada Base',
    color: 'bg-blue-600',
    description: 'Espessura: 1.5mm',
  },
  {
    label: 'Aplicação de Primer',
    color: 'bg-purple-500',
    description: 'Espessura: 0.2mm',
  },
  {
    label: 'Tratamento de superfície',
    color: 'bg-brown-500 border-brown-600',
    description: 'Lixamento ou Jateamento SA3',
  },
  {
    label: 'Substrato',
    color: 'bg-red-600',
    description: 'Fibra de Vidro ou Aço Carbono',
  },
];

export default function CoatingDiagram() {
  return (
    <div className="w-full">
      {coatingLayers.map((layer, index) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${layer.color} ${
            index === 0
              ? 'rounded-t-lg'
              : index === coatingLayers.length - 1
              ? 'rounded-b-lg'
              : 'rounded-none'
          } ${index === 5 ? 'p-2' : 'p-4'} shadow-lg`}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-1">{layer.label}</h3>
            <p className="text-lg text-white">{layer.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
