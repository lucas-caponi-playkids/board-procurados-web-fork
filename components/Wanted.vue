<template>
  <div class="wanted-container">
    <ul v-for="person in wanted_people" :key="person.name">
      <li>
        <img :src="person.image" alt="" />
        <p>{{ person.name }}</p>
        <p>
          {{ $t('currency_prefix') }}
          {{ person.reward }}
          {{ $t('currency_code') }}
        </p>
        <p>
          {{ $dateFns.format(person.wanted_since, $t('currency_date_format')) }}
        </p>
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
          reward: 4258.89,
          wanted_since: new Date()
        },
        {
          name: 'Felipe',
          image:
            'https://ca.slack-edge.com/T0Q6A7YH1-U59FZM5SA-6b6f6d573926-512',
          reward: 3786.45,
          wanted_since: new Date()
        },
        {
          name: 'Lucas',
          image:
            'https://ca.slack-edge.com/T0Q6A7YH1-U016PPKR960-c6bda20f346d-512',
          reward: 1234.5,
          wanted_since: new Date()
        },
        {
          name: 'Rafael',
          image:
            'https://ca.slack-edge.com/T0Q6A7YH1-U0QSB7342-a0634b47ba54-512',
          reward: 367.68,
          wanted_since: new Date()
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.wanted-container {
  img {
    width: 200px;
  }
}
</style>
