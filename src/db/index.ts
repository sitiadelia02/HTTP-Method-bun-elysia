import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { produkTable, usersTable } from './schema';


const client = postgres(process.env.DATABASE_URL!)
export const db = drizzle({ client });

 const produk: typeof produkTable.$inferInsert = {
    namaBarang: 'Laptop',
    stok: 10,
    harga: 1000000,
  };

await db.insert(produkTable).values(produk);


const data = await db.select()
    .from(produkTable);
console.log(data);