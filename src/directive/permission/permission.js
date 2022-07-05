import { pinia } from '@/store';

export default {
  inserted(el, binding) {
    const { value } = binding;
    const powers = pinia.state.value.userStore.permissions;
    if (Array.isArray(value)) {
      const hasPermission = powers.some((item) => value.includes(item));
      if (!hasPermission) {
        el.parentNode.removeChild(el);
      }
    } else {
      throw new Error('v-permisson should accept Array');
    }
  },
};
