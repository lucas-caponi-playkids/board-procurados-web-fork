<template>
  <div class="report-container">
    <div>
      <h3>{{ $t('report.title') }}</h3>
      <form>
        <component :is="address" />
      </form>
    </div>
  </div>
</template>

<script>
import AddressEn from '@/components/En/AddressEn'
import AddressEs from '@/components/Es/AddressEs'
import AddressPt from '@/components/Pt-Br/AddressPtBr'

export default {
  components: {
    AddressEn,
    AddressEs,
    AddressPt
  },
  data() {
    return {
      address: this.getAddressComponent()
    }
  },
  methods: {
    getAddressComponent() {
      switch (this.$i18n.locale) {
        case 'en':
          return AddressEn
        case 'es':
          return AddressEs
        case 'pt-br':
          return AddressPt
      }
    }
  }
}
</script>
<style lang="scss">
form {
  .form-address {
    display: flex;
    flex-direction: column;
  }
}
</style>
