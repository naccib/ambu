import { fetchShare } from '../../../lib/share'

import { ShareDisplay } from '../../../components/ShareDisplay'

interface SharePageProperties {
    params: { code: string }
}

export default async function SharePage({ params: { code } }: SharePageProperties) {
    console.log(`Fetching ${code}`)
    
    const share = await fetchShare(code)   
    console.log(`Fetched: ${share?.id}`)

    return (
        <section>
  <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
    <div className="w-full mx-auto text-left">
      <div className="relative flex-col items-center m-auto align-middle">
        <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
          <div className="flex flex-col mt-6 lg:mt-0">
          { share == undefined ? <p>Scan not found.</p> : <ShareDisplay title={share.title} content={share?.content} created={new Date(share!.created_at)}/> }
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}