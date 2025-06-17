import { useState, useEffect } from 'react';

/**
 * Hook customizado que aplica "debounce" a um valor.
 * @param {any} value O valor a ser "debounced".
 * @param {number} delay O tempo de atraso em milissegundos.
 * @returns {any} O valor "debounced".
 */
export function useDebounce(value, delay) {
  // Estado para guardar o valor "debounced"
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Cria um "timer" que só vai atualizar o estado `debouncedValue`
    // depois do tempo especificado em `delay`.
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Esta função de "limpeza" é crucial. O React a executa sempre que
    // o `value` muda (antes de criar o próximo timer) ou quando o
    // componente é desmontado. Ela cancela o timer anterior.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // O efeito só é re-executado se o `value` ou o `delay` mudar.

  return debouncedValue;
}