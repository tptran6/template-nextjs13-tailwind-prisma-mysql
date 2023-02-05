import Image from "next/image";
import { Inter } from "@next/font/google";
import { PrismaClient } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const prisma = new PrismaClient();

  // Update `my_model` to match your model in schema.prisma. Note that it should be lowercase even though it is Uppercased in the schema.prisma file
  const my_rows = await prisma.my_model.findMany();
  return (
    <>
      <div className="text-3xl">Hello!</div>
      <div>
        {my_rows.map((row) => (
          <div key={row.id}>{row.field_name}</div>
        ))}
      </div>
    </>
  );
}
