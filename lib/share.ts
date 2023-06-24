import { createClient, SupabaseClient } from '@supabase/supabase-js'

import { Database } from './database.types'

export async function fetchShare(code: String) {
    const client = createSupabase()

    if(client == undefined) {
        return undefined
    }

    const response = await client
                        .from('share')
                        .select()
                        .eq('code', code.toUpperCase())

    if(response.status != 200 || response.data == undefined) {
        console.error(`Supabase error: ${response.error}`)

        return undefined
    }    

    if(response.data.length == 0) {
        console.info(`Returned 0 records for ${code}.`)

        return undefined
    }

    return response.data[0]
}

/**
 * Returns a Supabase client if the required environment variables are set, otherwise logs an error and returns undefined.
 *
 * @return {SupabaseClient<any, "public", any> | undefined} A Supabase client if the required environment variables are set, otherwise undefined.
 */
function createSupabase() {
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_KEY

    if(url == undefined || key == undefined) {
        console.error(`Missing URL or API key for Supabase.`)
        
        return undefined
    }

    return createClient<Database>(url, key)
}