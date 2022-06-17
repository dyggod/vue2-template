const ANTD = {
  primary: {
    color: '#1890ff',
    warning: '#faad14',
    success: '#52c41a',
    error: '#f5222d',
    light: {
      menuColors: ['#000c17', '#001529', '#002140'],
    },
    dark: {
      menuColors: ['#000c17', '#001529', '#002140'],
    },
    night: {
      menuColors: ['#151515', '#1f1f1f', '#1e1e1e'],
    },
  },
  theme: {
    dark: {
      'layout-body-background': '#f0f2f5',
      'body-background': '#fff',
      'component-background': '#fff',
      'heading-color': 'rgba(0, 0, 0, 0.85)',
      'text-color': 'rgba(0, 0, 0, 0.65)',
      'text-color-inverse': '#fff',
      'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
      'shadow-color': 'rgba(0, 0, 0, 0.15)',
      'border-color-split': '#f0f0f0',
      'background-color-light': '#fafafa',
      'background-color-base': '#f5f5f5',
      'table-selected-row-bg': '#fafafa',
      'table-expanded-row-bg': '#fbfbfb',
      'checkbox-check-color': '#fff',
      'disabled-color': 'rgba(0, 0, 0, 0.25)',
      'menu-dark-color': 'rgba(254, 254, 254, 0.65)',
      'menu-dark-highlight-color': '#fefefe',
      'menu-dark-arrow-color': '#fefefe',
      'btn-primary-color': '#fff',
    },
    light: {
      'layout-body-background': '#f0f2f5',
      'body-background': '#fff',
      'component-background': '#fff',
      'heading-color': 'rgba(0, 0, 0, 0.85)',
      'text-color': 'rgba(0, 0, 0, 0.65)',
      'text-color-inverse': '#fff',
      'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
      'shadow-color': 'rgba(0, 0, 0, 0.15)',
      'border-color-split': '#f0f0f0',
      'background-color-light': '#fafafa',
      'background-color-base': '#f5f5f5',
      'table-selected-row-bg': '#fafafa',
      'table-expanded-row-bg': '#fbfbfb',
      'checkbox-check-color': '#fff',
      'disabled-color': 'rgba(0, 0, 0, 0.25)',
      'menu-dark-color': 'rgba(1, 1, 1, 0.65)',
      'menu-dark-highlight-color': '#fefefe',
      'menu-dark-arrow-color': '#fefefe',
      'btn-primary-color': '#fff',
    },
  },
};

function modifyVars(theme = 'dark') {
  return {
    ...ANTD.theme[theme],
  };
}

module.exports = {
  modifyVars,
};
