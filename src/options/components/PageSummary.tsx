import { updateUserConfig } from '@/config'
import { changeToast } from '@/utils/utils'
import { Button, Card, Divider, Spacer, Text, Textarea, Toggle, useToasts } from '@geist-ui/core'
import { useCallback } from 'preact/hooks'
import React from 'react'

export interface PageSummaryProps {
  pageSummaryEnable: boolean
  setPageSummaryEnable: (state: boolean) => void
  pageSummaryWhitelist: string
  setPageSummaryWhitelist: (whitelist: string) => void
  pageSummaryBlacklist: string
  setPageSummaryBlacklist: (blacklist: string) => void
}

function PageSummaryComponent(props: PageSummaryProps) {
  const {
    pageSummaryEnable,
    setPageSummaryEnable,
    pageSummaryWhitelist,
    pageSummaryBlacklist,
    setPageSummaryWhitelist,
    setPageSummaryBlacklist,
  } = props
  const { setToast } = useToasts()

  const onPageSummarySave = useCallback(() => {
    updateUserConfig({ pageSummaryWhitelist, pageSummaryBlacklist })
    setPageSummaryWhitelist(pageSummaryWhitelist)
    setPageSummaryBlacklist(pageSummaryBlacklist)
    setToast(changeToast)
  }, [
    pageSummaryBlacklist,
    pageSummaryWhitelist,
    setPageSummaryBlacklist,
    setPageSummaryWhitelist,
    setToast,
  ])

  const onPageSummaryEnableChange = useCallback(
    (e: React.ChangeEvent) => {
      const value = e.target.checked
      setPageSummaryEnable(value)
      updateUserConfig({ pageSummaryEnable: value })
      setToast(changeToast)
    },
    [setPageSummaryEnable, setToast],
  )

  const onPageSummaryWhitelistChange = useCallback(
    (e: React.ChangeEvent) => {
      const value = e.target.value || ''
      setPageSummaryWhitelist(value)
    },
    [setPageSummaryWhitelist],
  )

  const onPageSummaryBlacklistChange = useCallback(
    (e: React.ChangeEvent) => {
      const value = e.target.value || ''
      setPageSummaryBlacklist(value)
    },
    [setPageSummaryBlacklist],
  )

  return (
    <>
      <Text h3 className="glarity--mt-5">
        Page Summary
      </Text>

      <Card>
        <Card.Content>
          <Text
            h5
            className="glarity--mb-0 glarity--flex glarity--flex-row glarity--items-center glarity--gap-1"
          >
            <Toggle
              initialChecked
              checked={pageSummaryEnable}
              onChange={onPageSummaryEnableChange}
            />{' '}
            Show My ChatGPT Icon
          </Text>
          <Text className="glarity--mt-0" font="12px">
            Once hidden, the My ChatGPT icon will no longer appear on the page. However, you can
            open the page summary by clicking on the browser extension icon.
          </Text>
        </Card.Content>
        <Divider />
        <Card.Content>
          <Text h4 className="glarity--mb-0">
            Whitelist Sites
          </Text>
          <Text className="glarity--mt-0" font="12px">
            Only display the My ChatGPT icon on these sites (one URL per line).
          </Text>
          <Spacer h={0.5} />
          <Textarea
            resize={'vertical'}
            value={pageSummaryWhitelist}
            style={{ width: '400px', height: '100px' }}
            onChange={onPageSummaryWhitelistChange}
          />
        </Card.Content>
        <Divider />
        <Card.Content>
          <Text h4 className="glarity--mb-0">
            Blacklist Sites
          </Text>
          <Text className="glarity--mt-0" font="12px">
            Do not display My ChatGPT icon on these sites (one URL per line).
          </Text>
          <Spacer h={0.5} />
          <Textarea
            resize={'vertical'}
            value={pageSummaryBlacklist}
            style={{ width: '400px', height: '100px' }}
            onChange={onPageSummaryBlacklistChange}
          />
        </Card.Content>
        <Card.Footer>
          <Button scale={2 / 3} style={{ width: 20 }} type="success" onClick={onPageSummarySave}>
            Save
          </Button>
        </Card.Footer>
      </Card>
    </>
  )
}

export default PageSummaryComponent
