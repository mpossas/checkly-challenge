<template>
  <nav>
    <span class="nav-bar-item"></span>
    <a href="/" class="nav-bar-item">{{ $t('reporting.title').toUpperCase() }}</a>
  </nav>
</template>

<style scoped>
nav {
  padding: 1rem;
  border-radius: 4px;
  background-color: var(--nav-bar);

  display: flex;
  gap: 1rem;

  @media (min-width: 1080px) {
    flex-direction: column;
  }
}

.nav-bar-item {
  background-color: var(--nav-bar-item);
  border-radius: 4px;
}

span {
  height: 41px;
  width: 60px;
}

a {
  text-decoration: none;
  color: var(--dashboard--text);

  padding: 11px 14px;

  @media (min-width: 500px) {
    min-width: 140px;
  }
}
</style>
