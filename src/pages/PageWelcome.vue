<template>
  <q-page class="constrain-more q-pa-md">
    <q-card class="card-post q-mb-md" flat bordered>
      <q-card-section class="text-black">
        <div class="text-h6">Welcome!</div>
      </q-card-section>
      <q-separator/>
      <q-card-section class="row justify-center">
        <q-img src="../assets/movies.jpg" style="max-width: 300px;"/>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat to="/movie-list">Movies</q-btn>
      </q-card-actions>
      <q-separator/>
    </q-card>
  </q-page>
</template>
