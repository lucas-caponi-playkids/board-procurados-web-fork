<template>
  <div class="wanted-container">
    <ul v-for="person in wanted_people" :key="person.name">
      <li>
        {{ person.name }}
        <img :src="person.image" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Wanted',
  data() {
    return {
      wanted_people: [
        {
          name: 'Jean',
          image:
            'https://ca.slack-edge.com/T0Q6A7YH1-U4GB1RGH3-6731c870f795-512',
          reward: 0.0,
          wanted_since: new Date()
        },
        {
          name: 'Felipe',
          image:
            'https://ca.slack-edge.com/T0Q6A7YH1-U59FZM5SA-6b6f6d573926-512',
          reward: 0.0,
          wanted_since: new Date()
        },
        {
          name: 'Lucas',
          image:
            'https://ca.slack-edge.com/T0Q6A7YH1-U016PPKR960-c6bda20f346d-512',
          reward: 0.0,
          wanted_since: new Date()
        },
        {
          name: 'Rafael',
          image:
            'https://ca.slack-edge.com/T0Q6A7YH1-U0QSB7342-a0634b47ba54-512',
          reward: 0.0,
          wanted_since: new Date()
        }
      ]
    }
  }
}
</script>
