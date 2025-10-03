// app/[lang]/layout.js (Server component)

export default async function LangLayout(props) {
  return (
    <div className='lang-layout'>
        <main>
          {props.children}
        </main>
    </div>
  );
}