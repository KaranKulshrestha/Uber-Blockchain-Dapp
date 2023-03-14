import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: '390v7uu3',
    dataset: 'production',
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion: '2023-03-14', // use current date (YYYY-MM-DD) to target the latest API version
    token: "skUAtSXdeA2kXyxEf3TchIL61mMmhI8dKAklAeuD9hhndoR4Is09ORb9Q5Uf9l88KCwOObJIRLlqS6JDpDZIl2mparyXQxPrCFvvoBaFtffutUo56Syy8lYmRXVxfhHkR8P548coFvRnM0GCSoyk6yhZZh8nRirdmA60egyTEcgnTrKiR1A6"
  })