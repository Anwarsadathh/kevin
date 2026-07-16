Company photos/screenshots go here, then set `image` in app/companies.ts
and swap the placeholder div in Ventures.tsx for:

  <Image src={c.image} alt={c.name} fill className="object-cover" />

Portrait photo goes at /public/portrait.jpg -> see Hero.tsx comment.
