const { createClient } = require('@supabase/supabase-js');

// Extracted from user input: https://drjacjxookqotiztnbpt.supabase.cosb_publishable_af2657-YwZipYZby_OFdTA_APjUTViA
// Assuming URL ends at .co and Key starts after.
const supabaseUrl = 'https://drjacjxookqotiztnbpt.supabase.co';
const supabaseKey = 'sb_publishable_af2657-YwZipYZby_OFdTA_APjUTViA';

console.log("Testing connection to:", supabaseUrl);
console.log("Using Key:", supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    try {
        console.log("Attempting to select from 'consultations' table...");
        const { data, error } = await supabase
            .from('consultations')
            .select('*')
            .limit(1);

        if (error) {
            console.error("Supabase Error:", JSON.stringify(error, null, 2));
        } else {
            console.log("Success! Connection established. Data:", data);
        }
    } catch (err) {
        console.error("Unexpected Error:", err);
    }
}

testConnection();
