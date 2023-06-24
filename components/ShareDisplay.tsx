import { formatRelative } from 'date-fns' 
import { ptBR } from 'date-fns/locale'

interface ShareDisplayProperties {
    title: string
    content: string
    created: Date
}

export function ShareDisplay({ title, content, created }: ShareDisplayProperties) {
    const elapsedTime = formatRelative(created, Date.now(), {
        locale: ptBR
    })

  return (
    <div>
      <div className="max-w-xl">
        <div>
          <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
            {title}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-6 lg:max-w-9xl">
        <ul
          role="list"
          className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-3"
        >
          <li>
            <div>
              <p className="mt-5 text-lg font-medium leading-6 text-black">
                Conteúdo
              </p>
            </div>
            <div className="mt-2 text-base text-gray-500">
              {content}
            </div>
          </li>
          <li>
            <div>
              <p className="mt-5 text-lg font-medium leading-6 text-black">
                Criado em
              </p>
            </div>
            <div className="mt-2 text-base text-gray-500">{elapsedTime}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
