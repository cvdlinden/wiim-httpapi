---
aside: false
outline: false
title: vitepress-openapi
---

<script setup lang="ts">
import { useRoute } from 'vitepress'
import spec from '../../openapi.json'

const route = useRoute()

const tag = route.data.params.tag
</script>

<OASpec :spec="spec" :tags="[tag]" hide-info hide-servers hide-paths-summary />