Drop logo files here, then open app/companies.ts and set the `logo` field.

Expected files (any of .svg / .png / .webp — SVG best):
  /public/logos/kwin.svg        -> PARENT.logo        = "/logos/kwin.svg"
  /public/logos/learnscape.svg  -> COMPANIES[0].logo  = "/logos/learnscape.svg"
  /public/logos/investbetter.svg-> COMPANIES[1].logo  = "/logos/investbetter.svg"
  /public/logos/caffe.svg       -> COMPANIES[2].logo  = "/logos/caffe.svg"

That's the ONLY edit needed — the initials fallback (KS / LS / IB / CL)
disappears automatically everywhere: nav, hero badge, logo marquee,
group diagram, company cards, footer.

Note: logos render on the dark navy "The group" section via `invert`,
which works for solid single-colour marks. If your logos are full-colour,
remove `invert` from Group.tsx and supply a light/white variant instead.
